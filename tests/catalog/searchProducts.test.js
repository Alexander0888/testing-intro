const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const expectedIds = [1]; //Arrange
    const result = searchProducts(products, "Наушники").map(
      (value) => value.id,
    ); //Act
    expect(result).toEqual(expectedIds); //Assert
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const expectedIds = [6]; //Arrange
    const result = searchProducts(products, "Чистый код").map(
      (value) => value.id,
    ); //Act
    expect(result).toEqual(expectedIds); //Assert
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const expectedIds = [4]; //Arrange
    const result = searchProducts(products, "Настольная лампа").map(
      (value) => value.id,
    ); //Act
    expect(result).toEqual(expectedIds); //Assert
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const expectedIds = [3]; //Arrange
    const result = searchProducts(products, "javascript").map(
      (value) => value.id,
    ); //Act
    expect(result).toEqual(expectedIds); //Assert
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const expectedIds = [5]; //Arrange
    const result = searchProducts(products, "ЧЕХОЛ").map((value) => value.id); //Act
    expect(result).toEqual(expectedIds); //Assert
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const expectedIds = [1]; //Arrange
    const result = searchProducts(products, "наушники").map(
      (value) => value.id,
    ); //Act
    expect(result).toEqual(expectedIds); //Assert
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectedIds = [1, 2, 3, 4, 5, 6]; //Arrange
    const result = searchProducts(products, "").map((value) => value.id); //Act
    expect(result).toEqual(expectedIds); //Assert
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectedIds = [1, 2, 3, 4, 5, 6]; //Arrange
    const result = searchProducts(products, "   ").map((value) => value.id); //Act
    expect(result).toEqual(expectedIds); //Assert
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectedIds = [1, 2, 3, 4, 5, 6]; //Arrange
    const result = searchProducts(products, "\t\n").map((value) => value.id); //Act
    expect(result).toEqual(expectedIds); //Assert
  });
});
