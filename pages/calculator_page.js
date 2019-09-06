const calcTestData = require("../json/calcTestData.json");

const NaNCheck = () => {
    element(by.model("first")).sendKeys(calcTestData.CalulatorPage.NaNData.inputBox1);
    element(by.model("second")).sendKeys(calcTestData.CalulatorPage.NaNData.inputBox2);
    element(by.model("operator")).element(by.css(`[value=${calcTestData.CalulatorPage.NaNData.operator}]`)).click();
    element(by.buttonText("Go!")).click();
}

const calcAdd = () => {
    element(by.model("first")).sendKeys(calcTestData.CalulatorPage.AddData.inputBox1);
    element(by.model("operator")).element(by.css(`[value=${calcTestData.CalulatorPage.AddData.operator}]`)).click();
    element(by.model("second")).sendKeys(calcTestData.CalulatorPage.AddData.inputBox2);
    element(by.buttonText("Go!")).click();
}
const calcMin = () => {
    element(by.model("first")).sendKeys(calcTestData.CalulatorPage.SubtractData.inputBox1);
    element(by.model("operator")).element(by.css(`[value=${calcTestData.CalulatorPage.SubtractData.operator}]`)).click();
    element(by.model("second")).sendKeys(calcTestData.CalulatorPage.SubtractData.inputBox2);
    element(by.buttonText("Go!")).click();
}
const calcMul = () => {
    element(by.model("first")).sendKeys(calcTestData.CalulatorPage.MultipleData.inputBox1);
    element(by.model("operator")).element(by.css(`[value=${calcTestData.CalulatorPage.MultipleData.operator}]`)).click();
    element(by.model("second")).sendKeys(calcTestData.CalulatorPage.MultipleData.inputBox2);
    element(by.buttonText("Go!")).click();
}
const calcDiv = () => {
    element(by.model("first")).sendKeys(calcTestData.CalulatorPage.DivisionData.inputBox1);
    element(by.model("operator")).element(by.css(`[value=${calcTestData.CalulatorPage.DivisionData.operator}]`)).click();
    element(by.model("second")).sendKeys(calcTestData.CalulatorPage.DivisionData.inputBox2);
    element(by.buttonText("Go!")).click();
}
const calcMod = () => {
    element(by.model("first")).sendKeys(calcTestData.CalulatorPage.ModuloData.inputBox1);
    element(by.model("operator")).element(by.css(`[value=${calcTestData.CalulatorPage.ModuloData.operator}]`)).click();
    element(by.model("second")).sendKeys(calcTestData.CalulatorPage.ModuloData.inputBox2);
    element(by.buttonText("Go!")).click();
}



module.exports ={
    NaNCheck,
    calcAdd,
    calcMin,
    calcDiv, 
    calcMul,
    calcMod
    
}