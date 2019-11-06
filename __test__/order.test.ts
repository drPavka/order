import {order} from '../src/order';



test('Test basic variants', () => {

  let arr:[ string, string][] = [["is2 Thi1s T4est 3a", "Thi1s is2 3a T4est"], ['4of Fo1r pe6ople g3ood th5e the2', 'Fo1r the2 g3ood 4of th5e pe6ople'], ['', '']];

  for (let i of arr) expect(order(i[0])).toBe(i[1])
});
