// toLocaleString() = returns a string with a language
//                    sensitive representatition of this number

//number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'option' = object with formatting options

let myNum1 = 123456.789;
let myNum2 = .2;
let myNum3 = 100;

//myNum = myNum.toLocaleString("en-US"); //US English
//myNum = myNum.toLocaleString("hi-IN"); //Hindi
//myNum = myNum.toLocaleString("de-DE"); //standard German

//myNum = myNum.toLocaleString("en-US", {style: "currency", currency:"IDR"}); 
//myNum = myNum.toLocaleString("id-ID", {style: "currency", currency:"IDR"}); 
myNum1 = myNum1.toLocaleString("de-DE", {style: "currency", currency:"EUR"}); 

myNum2 = myNum2.toLocaleString(undefined, {style:"percent"});

myNum3 = myNum3.toLocaleString(undefined, {style:"unit", unit: "celsius"}); //unit = kilometer, miles, kilogram, etc 

console.log(myNum1);
console.log(myNum2);
console.log(myNum3);