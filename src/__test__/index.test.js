const randomString = require("../index");
const randomStrings = require("../index");

describe("Probar funcionalidades de randomStrings", () => {
  test("Probar la funcionalidad", () => {
    expect(typeof randomStrings()).toBe("string");
  });

  test("Comprobar que no existe una ciudad", () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
