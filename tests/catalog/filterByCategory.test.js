// Work in progress: replace the Jest TODO cases with actual assertions.
const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectedProducts = [1, 2, 3, 4, 5, 6]; //Arrange
    const result = filterByCategory(products, "all").map((value) => value.id); // Act
    expect(result).toEqual(expectedProducts); // Assert
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectedProducts = [1, 2, 3, 4, 5, 6]; //Arrange
    const result = filterByCategory(products).map((value) => value.id); // Act
    expect(result).toEqual(expectedProducts); // Assert
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectedProducts = [1, 2, 3, 4, 5, 6]; //Arrange
    const result = filterByCategory(products, "").map((value) => value.id); // Act
    expect(result).toEqual(expectedProducts); // Assert
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const expectedProducts = [1, 2]; //Arrange
    const result = filterByCategory(products, "electronics").map(
      (value) => value.id,
    ); // Act
    expect(result).toEqual(expectedProducts); // Assert
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    const expectedProducts = [3, 6]; //Arrange
    const result = filterByCategory(products, "books").map((value) => value.id); // Act
    expect(result).toEqual(expectedProducts); // Assert
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    const expectedProducts = [4, 5]; //Arrange
    const result = filterByCategory(products, "home").map((value) => value.id); // Act
    expect(result).toEqual(expectedProducts); // Assert
  });
  test("'clothes' возвращает пустой массив", () => {
    const expectedProducts = []; //Arrange
    const result = filterByCategory(products, "clothes").map(
      (value) => value.id,
    ); // Act
    expect(result).toEqual(expectedProducts); // Assert
  });
  test("'toys' возвращает пустой массив", () => {
    const expectedProducts = []; //Arrange
    const result = filterByCategory(products, "toys").map((value) => value.id); // Act
    expect(result).toEqual(expectedProducts); // Assert
  });
  test("'sports' возвращает пустой массив", () => {
    const expectedProducts = []; //Arrange
    const result = filterByCategory(products, "sports").map(
      (value) => value.id,
    ); // Act
    expect(result).toEqual(expectedProducts); // Assert
  });
});
