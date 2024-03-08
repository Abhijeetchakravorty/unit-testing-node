import {
    OtherStringUtils,
    calculateComplexity,
    toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
    describe.only("Other stringutils tests with spies", () => {
        let sut: OtherStringUtils;

        beforeEach(() => {
            sut = new OtherStringUtils();
        });

        test("Use a spy to track calls", () => {
            const toUpperCaseSpy = jest.spyOn(sut, `toUpperCase`);
            sut.toUpperCase("asa");
            expect(toUpperCaseSpy).toHaveBeenCalledWith("asa");
        });

        test("Use a spy to track calls", () => {
            const consoleLogSpy = jest.spyOn(console, "log");
            sut.logString("abc");
            expect(consoleLogSpy).toHaveBeenCalledWith("abc");
        });

        // Not a good practice to call private functions
        // test.only("Use a spy to replace the implementation of a method", () => {
        //     jest.spyOn(sut, "callExternalService").mockImplementation(() => {
        //         console.log("Calling mocked implementation");
        //     });
        //     sut.callExternalService();
        // });
    });

    describe("tracking callsbacks with jest mocks", () => {
        const callBackMocks = jest.fn();

        afterEach(() => {
            jest.clearAllMocks();
        });

        it("calls callback for invalid argument - track calls", () => {
            const actual = toUpperCaseWithCb("", callBackMocks);
            expect(actual).toBeUndefined();
            expect(callBackMocks).toHaveBeenCalledWith("Invalid argument!");
            expect(callBackMocks).toHaveBeenCalledTimes(1);
        });

        it("calls callback for invalid argument - track calls", () => {
            const actual = toUpperCaseWithCb("abc", callBackMocks);
            expect(actual).toBe("ABC");
            expect(callBackMocks).toHaveBeenCalledWith(
                "called function with abc"
            );
            expect(callBackMocks).toHaveBeenCalledTimes(1);
        });
    });

    describe("Tracking callbacks", () => {
        let cbArgs = [];
        let timesCalled = 0;

        function callBackMock(arg: string) {
            cbArgs.push(arg);
            timesCalled++;
        }

        afterEach(() => {
            cbArgs = [];
            timesCalled = 0;
        });

        it("calls callback for invalid argument - track calls", () => {
            const actual = toUpperCaseWithCb("", callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain("Invalid argument!");
            expect(timesCalled).toBe(1);
        });

        it("calls callback for invalid argument - track calls", () => {
            const actual = toUpperCaseWithCb("abc", callBackMock);
            expect(actual).toBe("ABC");
            expect(cbArgs).toContain("called function with abc");
            expect(timesCalled).toBe(1);
        });
    });

    it("To UpperCase - calls callbacl for invalid argument", () => {
        const actual = toUpperCaseWithCb("", () => {});
        expect(actual).toBeUndefined();
    });

    it("Calculate complexity", () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: "someInfo",
                field2: "someotherinfo",
            },
        };

        const actual = calculateComplexity(someInfo as any);

        expect(actual).toBe(10);
    });
});
