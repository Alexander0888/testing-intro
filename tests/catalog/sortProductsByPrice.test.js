const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const expectedIds = [3, 6, 5, 4, 2, 1]; // Arrange
    const result = sortProductsByPrice(products, "asc").map(
      (value) => value.id,
    ); // Act

    expect(result).toEqual(expectedIds); // Assert
  });
  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const expectedIds = [3, 6, 5, 4, 2, 1]; // Arrange
    const result = sortProductsByPrice(products).map((value) => value.id); // Act

    expect(result).toEqual(expectedIds); // Assert
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const selectedProducts = products.filter((value) =>
      [1, 3, 4].includes(value.id),
    ); // Arrange
    const result = sortProductsByPrice(selectedProducts, "asc").map(
      (value) => value.id,
    ); // Act

    expect(result).toEqual([3, 4, 1]); // Assert
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const expectedIds = [1, 2, 4, 5, 6, 3]; // Arrange
    const result = sortProductsByPrice(products, "desc").map(
      (value) => value.id,
    ); // Act

    expect(result).toEqual(expectedIds); // Assert
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const selectedProducts = [3, 1, 4].map((id) =>
      products.find((product) => product.id === id),
    ); // Arrange
    const result = sortProductsByPrice(selectedProducts, "desc").map(
      (value) => value.id,
    ); // Act
    expect(result).toEqual([1, 4, 3]); // Assert
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const selectedProducts = [5, 2, 6].map((id) =>
      products.find((product) => product.id === id),
    ); // Arrange
    const result = sortProductsByPrice(selectedProducts, "desc").map(
      (value) => value.id,
    ); // Act

    expect(result).toEqual([2, 5, 6]); // Assert
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = structuredClone(
      products.filter((value) => [1, 3, 4].includes(value.id)),
    ); // Arrange
    const copyOfArray = [...selectedProducts];
    sortProductsByPrice(selectedProducts, "asc").map((value) => value.id); // Act

    expect(selectedProducts).toEqual(copyOfArray); // Assert
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter((value) =>
      [1, 3, 4].includes(value.id),
    );
    // Arrange
    const copyOfArray = [...selectedProducts];
    sortProductsByPrice(selectedProducts, "desc"); // Act

    expect(selectedProducts).toEqual(copyOfArray); // Assert
  });

  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const copyOfArray = [...products];
    sortProductsByPrice(products); // Act

    expect(products).toEqual(copyOfArray); // Assert
  });
});
