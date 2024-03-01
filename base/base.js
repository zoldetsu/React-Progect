console.log("print WORLD")


var name = 'Nazar';
console.log(name)

let x = String(1111)

x = String(2+2)
x = String(false)
x = String(new Date())


console.log(x);

let result;

const firstTime = 'Jack';
const lastName = 'Brown';
const space = ' ';
const age = 25;
const greating = 'Hey there!';

result = firstTime + space +lastName;
console.log(result.toUpperCase())

const Brend = "TOYOTA";
const Model = "corola";
const Color = 'black';
const Year = 2000;


carHtml = `

    <h3>Car Decription</h3>
    <ul>
    <li>Brand: ${Brend}</li>
    <li>MODEL: ${Model}</li>
    <li>Brand: ${Color}</li>
    <li>Brand: ${Year}</li>
    <li>Doors: ${getDoorsNumber()}</li>
    </ul>

`
function getDoorsNumber() {
    return 5
}
document.body.innerHTML = carHtml;


let favoriteColor;


favoriteColor = prompt("what is your favorite colors?");

if (favoriteColor.toLowerCase() == 'red' || 'black') {
    console.log('good')
}
else {
    console.log('badd')
}

document.body.innerHTML = `<h4>${favoriteColor}</h4>`