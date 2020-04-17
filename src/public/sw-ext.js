/**
 * ### Расщирение сервисворкера
 *
 * @module sw-ext
 *
 * Created by Evgeniy Malyarov on 16.09.2018.
 */

self.__precacheManifest = (self.__precacheManifest || []).concat([
  {
    "revision": "0000",
    "url": "/favicon.ico"
  },
  {
    "revision": "0000",
    "url": "/imgs/splash.png"
  },
]);

self.addEventListener('sync', (event) => {
  if (event.tag == 'reload') {
    event.waitUntil(reloadStuff());
  }
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const delimiter = '/couchdb/mdm';
  if(url.pathname.startsWith(delimiter)) {
    event.respondWith(
      caches.open('mdm.v1')
        .then((cache) => {
          const key = url.pathname.split(delimiter)[1];

          return checkTime(cache, key)
            .then((ok) => {
              return !ok && checkHead(cache, event.request, key);
            })
            .then(() => {
              return cache.match(event.request);
            })
            .then((resp) => {
              if(resp) {
                return {resp, cached: true};
              }
              else {
                return fetch(event.request)
                  .then((resp) => {
                    return {resp, cached: false};
                  });
              }
            })
            .then(({resp, cached}) => {
              return updateHead(cache, `time${key}`, Date.now())
                .then(() => updateHead(cache, key, resp.headers.get('manifest')))
                .then(() => {
                  return cached ?
                    resp :
                    cache.put(event.request, resp.clone())
                      .then(() => resp);
                });
            })
            .catch((err) => {
              throw err;
            });
        }));
  }
});

// выясняет, надо ли анализировать head
function checkTime(cache, key) {
  return getHead(cache, `time${key}`)
    .then((manifest) => {
      return manifest && (3600000 + parseFloat(manifest) > Date.now());
    });
}

// обновляет сохраняемое значение
function updateHead(cache, key, manifest) {
  return cache.put(key, new Response('', {headers: {manifest}}));
}

function getHead(cache, key) {
  return cache.match(key)
    .then((res) => {
      if(res) {
        return res.headers.get('manifest');
      }
    });
}

function fake_res(manifest) {
  return {
    headers: {
      get() {
        return manifest;
      }
    }
  };
}

// проверяет версию по сохраненному head, если вернул ok - тело обновлять не надо
function checkHead(cache, req, key) {
  return getHead(cache, key)
    .then((manifest) => {
      if(manifest) {
        const Authorization = req.headers.get('Authorization');
        return fetch(req.url, {method: 'HEAD', headers: {Authorization}})
          .catch(() => fake_res(manifest))
          .then((res) => {
            return manifest === res.headers.get('manifest');
          });
      }
    })
    .then((ok) => {
      return !ok && cache.delete(req);
    });
}

function reloadStuff() {
  return Promise.resolve();
}
