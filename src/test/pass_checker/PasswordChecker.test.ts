import {
    PasswordChecker,
    PasswordErrors,
} from "../../app/pass_checker/PasswordChecker";

describe("Password Cheker Test Suite", () => {
    let sut: PasswordChecker;
    beforeEach(() => {
        sut = new PasswordChecker();
    });

    it("Password with less than 8 chars is invalid", () => {
        const actual = sut.checkPassword("1234567");
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    });

    it("Password with more than 8 chars is ok", () => {
        const actual = sut.checkPassword("12345678Aa");
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it("Password with no upper case letter is invalid", () => {
        const actual = sut.checkPassword("abcdefghij");
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it("Password with upper case letter is valid", () => {
        const actual = sut.checkPassword("12345abcA");
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it("Password with no lower case letter is invalid", () => {
        const actual = sut.checkPassword("1234ABCDEFGHIJKL");
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it("Password with lower case letter is valid", () => {
        const actual = sut.checkPassword("ABCDabcdefgh");
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    });
});
