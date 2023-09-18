export const findingQuadraticEquation = (
  a: number,
  b: number,
  c: number,
  e = Number.EPSILON
): [number, number] | [] => {
  if (Math.abs(a) <= e) {
    throw new Error("Не равно 0");
  }

  const value = b * b - 4 * a * c;

  if (value < -e) {
    return [];
  }

  if (Math.abs(value) <= e) {
    return [-b / (2 * a), -b / (2 * a)];
  }

  if (value > e) {
    return [(-b + value) / (2 * a), (-b - value) / (2 * a)];
  }

  throw new Error("прочая ошибка");
};
