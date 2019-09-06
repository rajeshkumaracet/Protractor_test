const { calcAdd,
    calcMin,
    calcDiv,
    calcMul,
    calcMod,
    NaNCheck } = require("../pages/calculator_page");

const calcTestData = require("../json/calcTestData.json");

describe("Automating Calc Diffrent Function", () => {

    it("NaN Check", () => {
        browser.get(calcTestData.CalulatorPage.url);
        NaNCheck();
        expect(element(by.css("form h2")).getText()).toBe("NaN");
        browser.sleep(2000)
        const rows1 = element(by.repeater("result in memory").row(0).column("result.value")).getText().then(a => a == 'NaN');
        expect(rows1).toBe(true);

    })

    it("Add Check", () => {
        calcAdd();
        expect(element(by.css("form h2")).getText()).toBe("10");
        const rows2 = element(by.repeater("result in memory").row(0).column("result.value")).getText().then(a => a == 10);
        expect(rows2).toBe(true);
    });

    it("Sub Check", () => {
        calcMin();
        expect(element(by.css("form h2")).getText()).toBe("0");
        const rows3 = element(by.repeater("result in memory").row(0).column("result.value")).getText().then(a => a == 0);
        expect(rows3).toBe(true);
    });

    it("Multiple Check", () => {
        calcMul();
        expect(element(by.css("form h2")).getText()).toBe("25");
        const rows4 = element(by.repeater("result in memory").row(0).column("result.value")).getText().then(a => a == 25);
        expect(rows4).toBe(true);
    });

    it("Divide Check", () => {
        calcDiv();
        expect(element(by.css("form h2")).getText()).toBe("1");
        const rows5 = element(by.repeater("result in memory").row(0).column("result.value")).getText().then(a => a == 1);
        expect(rows5).toBe(true);
    });

    it("Modulo Check", () => {
        calcMod();
        expect(element(by.css("form h2")).getText()).toBe("0");
        const rows6 = element(by.repeater("result in memory").row(0).column("result.value")).getText().then(a => a == 0);
        expect(rows6).toBe(true);
    });

    it("Check all data or added or not", () => {
        const lengthCheck = element.all(by.repeater("result in memory").column("result.timestamp")).getText().then(a => a.length == 6);
        expect(lengthCheck).toBe(true)

    })
})