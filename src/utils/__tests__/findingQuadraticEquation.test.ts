import { findingQuadraticEquation } from "../findingQuadraticEquation";

describe("findingQuadraticEquation", () => {
  //console.log(findingQuadraticEquation(0, 0, 0));

  it("Корней нет", () => {
    expect(findingQuadraticEquation(1, 0, 1)).toEqual([]);
  });

  it("Два корня кратности", () => {
    expect(findingQuadraticEquation(1, 0, -1)).toEqual([2, -2]);
  });

  it("Один корень кратности", () => {
    expect(findingQuadraticEquation(1, 0, 0)).toEqual([-0, -0]);
  });

  it("Коэффициент a не может быть равен 0", () => {
    try {
      findingQuadraticEquation(0, 1, 1);
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).not.toBeNull();
    }
  });
});
