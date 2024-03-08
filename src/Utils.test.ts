import { StringUtils, getStringInfo, toUpperCase } from "./app/Utils";

// Test 1
// describe("Utils test suite", () => {
//     it("should return uppercase of valid string", () => {
//         const sut = toUpperCase;
//         const expected = "ABC";
//         // act
//         const actual = toUpperCase("abc");
//         expect(actual).toBe(expected);
//     });
//     // it.only("should return info for for valid string", () => {
//     //     const actual = getStringInfo("My-String");
//     //     expect(actual.lowerCase).toBe("my-string");
//     //     expect(actual.extraInfo).toEqual({});
//     //     expect(actual.characters.length).toBe(9);
//     //     expect(actual.characters).toHaveLength(9);
//     //     expect(actual.characters).toEqual([
//     //         "M",
//     //         "y",
//     //         "-",
//     //         "S",
//     //         "t",
//     //         "r",
//     //         "i",
//     //         "n",
//     //         "g",
//     //     ]);
//     //     expect(actual.characters).toContain<string>("M");
//     //     expect(actual.characters).toEqual(
//     //         expect.arrayContaining([
//     //             "S",
//     //             "t",
//     //             "r",
//     //             "i",
//     //             "n",
//     //             "g",
//     //             "M",
//     //             "y",
//     //             "-",
//     //         ])
//     //     );
//     //     expect(actual.extraInfo).not.toBe(undefined);
//     //     expect(actual.extraInfo).not.toBeUndefined();
//     //     expect(actual.extraInfo).toBeDefined();
//     //     expect(actual.extraInfo).toBeTruthy();
//     // });
// });

describe("getStringinfo for arg my-String should", () => {
    describe("Stringutils tests", () => {
        let sut: StringUtils;

        beforeEach(() => {
            sut = new StringUtils();
        });

        it("Should return correct uppercase", () => {
            const actual = sut.toUpperCase("abc");

            expect(actual).toBe("ABC");
        });

        it("Should throw error on invalid argument - function", () => {
            function expectError() {
                const actual = sut.toUpperCase("");
            }
            expect(expectError).toThrow();
            expect(expectError).toThrowErrorMatchingSnapshot(
                "Invalid Argument"
            );
        });

        it("Should throw error on invalid argument - arrow function", () => {
            function expectError() {
                const actual = sut.toUpperCase("");
            }
            expect(() => {
                sut.toUpperCase("");
            }).toThrowErrorMatchingSnapshot("Invalid argument");
        });

        it("Should throw error on invalid argument - try catch block", () => {
            try {
                sut.toUpperCase("");
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty("message", "Invalid argument");
            }
        });
    });

    it("should return uppercase of valid string", () => {
        const sut = toUpperCase;
        const expected = "ABC";
        // act
        const actual = sut("abc");
        expect(actual).toBe(expected);
    });

    it("should return uppercase of valid string", () => {
        const sut = toUpperCase;
        const expected = "ABC";
        // act
        const actual = sut("abc");
        expect(actual).toBe(expected);
    });

    describe("ToUpperCase examples", () => {
        it.each([
            { input: "abc", expected: "ABC" },
            { input: "My-String", expected: "MY-STRING" },
            { input: "def", expected: "DEF" },
        ])("$input toUpperCase should be $expected", ({ input, expected }) => {
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        });
    });

    test("return right length", () => {
        const actual = getStringInfo("My-String");
        expect(actual.characters).toHaveLength(9);
    });

    test("return right lower case", () => {
        const actual = getStringInfo("My-String");
        expect(actual.lowerCase).toBe("my-string");
    });

    test("return right upper case", () => {
        const actual = getStringInfo("My-String");
        expect(actual.upperCase).toBe("MY-STRING");
    });

    test("return right characters", () => {
        const actual = getStringInfo("My-String");
        expect(actual.characters).toEqual([
            "M",
            "y",
            "-",
            "S",
            "t",
            "r",
            "i",
            "n",
            "g",
        ]);
        expect(actual.characters).toContain<string>("M");
        expect(actual.characters).toEqual(
            expect.arrayContaining([
                "S",
                "t",
                "r",
                "i",
                "n",
                "g",
                "M",
                "y",
                "-",
            ])
        );
    });

    test("return defined extra info", () => {
        const actual = getStringInfo("My-String");
        expect(actual.extraInfo).toBeDefined();
    });

    test("return right extra info", () => {
        const actual = getStringInfo("My-String");
        expect(actual.extraInfo).toEqual({});
    });
});
