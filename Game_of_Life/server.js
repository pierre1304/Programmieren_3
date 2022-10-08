const grass = require("./grass.js");

let matrix = [];
let side = 20;
let grassArr = [];
let grazerArr = [];
let predatorArr = [];
let cannibaleArr = [];
let mutantArr = [];

function getRandMatrix(cols, rows) {
    let matrix = [];
    for(let y = 0; y < rows; y++) {
        matrix[y] = []; 
        for(let x = 0; x < cols; x++) {
            matrix[y][x] = Math.round(random(0, 5));
        }
    }
    return matrix;
}

function createGame() {  
    //matrix = getRandMatrix(101, 45);
    //background(50);
    //frameRate(5);
    for(let y in matrix) {
        y = parseInt(y);
        for(let x in matrix[y]) {
            x = parseInt(x);
            if(matrix[y][x] == 1) {
                let grassObj = new Grass(x, y);
                grassArr.push(grassObj);
            } else if(matrix[y][x] == 2) {
                let grazerObj = new Grazer(x, y);
                grazerArr.push(grazerObj);
            } else if(matrix[y][x] == 3) {
                let predatorObj = new Predator(x, y);
                predatorArr.push(predatorObj);
            } else if(matrix[y][x] == 4) {
                let cannibaleObj = new Cannibale(x, y);
                cannibaleArr.push(cannibaleObj);
            } else if(matrix[y][x] == 5) {
                let mutantObj = new Mutant(x, y);
                mutantArr.push(mutantObj);
            }
        }
    }
}

function update() {
    for(let i = 0; i < grassArr.length; i++) {
        let grassObj = grassArr[i];
        grassObj.mul();
    }
    for(let i = 0; i < grazerArr.length; i++) {
        let grazerObj = grazerArr[i];
        grazerObj.eat();
        grazerObj.mul();
    }
    for(let i = 0; i < predatorArr.length; i++) {
        let predatorObj = predatorArr[i];
        predatorObj.eat();
        predatorObj.mul();
    }
    for(let i = 0; i < cannibaleArr.length; i++) {
        let cannibaleObj = cannibaleArr[i];
        cannibaleObj.eat();
        cannibaleObj.mul();
    }
    for(let i = 0; i < mutantArr.length; i++) {
        let mutantObj = mutantArr[i];
        mutantObj.mutate();
        mutantObj.checkDeath();
    }
}







//server
const express = require("express");
const app = express();

app.listen(3000, function(){
    console.log("hallo von Port 3000");
})