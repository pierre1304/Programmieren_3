let clickCounter = 0;
let p = document.getElementById('pElement');

function clickHandler(event) {
console.log(event);
let str = "Thanks for Clicking " + clickCounter;
this.innerText = str;
}
console.log(p);
p.addEventListener("click", clickHandler);

function bodyClickHandler(evt) {
    console.log("Body clicked at:" + evt.pageX + ", " + evt.pageY);
}

window.onclick = bodyClickHandler;

function setup() {
    background("#acacac");
}

function mousePressed() {
    console.log("p5", mouseX, mouseY);
}

function keydown(evt) {
    console.log("You printed: " + evt.key);
}
window.onkeydown = keydown;

function keyPressed() {
    console.log(key);
}

//hallo