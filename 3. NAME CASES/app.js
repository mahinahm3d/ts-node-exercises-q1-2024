//Lower case
var personName = "Allama Iqbal";
console.log("lowercase:", personName.toLowerCase());
//Upper case
console.log("uppercase", personName.toUpperCase());
//Tittle case
console.log("tittlecase", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
