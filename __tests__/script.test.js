const { convertToUpperCase } = require('../script.js');

describe("convertToUpperCase", () => {

    test("should convert lowercase letterse to uppercase", () => {
        expect(convertToUpperCase("hej")).toBe("HEJ");
    })
})