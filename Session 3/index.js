const Square = require("./module");
require("./express");

function main() {
    let mySquareObject = new Square(5);
    console.log("Flaeche: ", mySquareObject.getArea());
}

main();