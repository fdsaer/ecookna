export const chunksMaker = (arr, chunkSize) => {
  const chunksArr = arr.reduce((acc, item) => {
    const lastChunk = acc[acc.length - 1];
    const newAcc = acc.slice();
    const lastChunkSizesSum = Array.isArray(lastChunk) ? lastChunk.reduce((acc, {
      size
    }) => size ? acc += size : 0, 0) : 0;

    if (Array.isArray(lastChunk) && item.size + lastChunkSizesSum < chunkSize) {
      newAcc[newAcc.length - 1].push(item);
    } else {
      newAcc.push([item]);
    }

    return newAcc;
  }, []);
  return chunksArr;
};