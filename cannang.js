let a = +prompt("Weight");
let b = +prompt("Height");
let bmi = a/(b**2)
if (bmi <18) {
    document.write("underweight");
}
else if (bmi <25) {
    document.write("normal");
}
else if (bmi <30) {
    document.write("overweight");
}
else {
    document.write("obese");
}