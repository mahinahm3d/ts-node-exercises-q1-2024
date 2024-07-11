//Lower case
let personName: string = "Allama Iqbal"
console.log("lowercase:" ,personName.toLowerCase());

//Upper case
console.log("uppercase", personName.toUpperCase());   

//Tittle case
console.log("tittlecase", personName.replace(/\bw/g,c => c. toUpperCase()));
