

function Fixx() {
    console.log("declaration")

}

const func = function () { console.log("expression")}


const func2 = (number,age) => age - number;

console.log(func2(15,16));



const func3 = (number,age) => {

    const age2 = age - number;
    const isPerson = age2 > number ? true : false;
    return isPerson;
};


console.log(func3(15,20));