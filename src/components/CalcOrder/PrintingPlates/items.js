/**
 * Возвращает список печатных форм, обрезанный по подразделению
 *
 * @module items
 *
 * Created by Evgeniy Malyarov on 19.04.2020.
 */

import Invoice1 from './Invoice1';

const all = [Invoice1];

export default function items() {
  const {current_user, job_prm} = $p;

  return all.filter((v) => {
    return true;
  });
}
