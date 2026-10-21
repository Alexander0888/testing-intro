const products = require("../../src/data/products");
const { getProductById } = require("../../src/catalog");

describe("getProductById", () => {
  test("ID 1 возвращает products[0]", () => {
    const id = 1; // Arrange
    const result = getProductById(products, id); // Act
    expect(result).toEqual(products[0]); // Assert
  });
  test("ID 4 возвращает products[3]", () => {
    const id = 4; // Arrange
    const result = getProductById(products, id); // Act
    expect(result).toEqual(products[3]); // Assert
  });
  test("ID 6 возвращает products[5]", () => {
    const id = 6; // Arrange
    const result = getProductById(products, id); // Act
    expect(result).toEqual(products[5]); // Assert
  });
  test("ID 0 возвращает null", () => {
    const id = 0; // Arrange
    const result = getProductById(products, id); // Act
    expect(result).toBe(null); // Assert
  });
  test("ID 999 возвращает null", () => {
    const id = 999; // Arrange
    const result = getProductById(products, id); // Act
    expect(result).toBe(null); // Assert
  });
  test("ID -1 возвращает null", () => {
    const id = -1; // Arrange
    const result = getProductById(products, id); // Act
    expect(result).toBe(null); // Assert
  });
  test("строковый ID '1' возвращает null", () => {
    const id = "1"; // Arrange
    const result = getProductById(products, id); // Act
    expect(result).toBe(null); // Assert
  });
  test("ID undefined возвращает null", () => {
    const id = undefined; // Arrange
    const result = getProductById(products, id); // Act
    expect(result).toBe(null); // Assert
  });
  test("ID NaN возвращает null", () => {
    const id = NaN; // Arrange
    const result = getProductById(products, id); // Act
    expect(result).toBe(null); // Assert
  });
});
