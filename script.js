const landingPage= document.querySelector(".landing");
const color= document.querySelector(".colors");
const organ= document.querySelector(".organs");
const fruit= document.querySelector(".fruits");
const vegetable= document.querySelector(".vegetables");

function showCategory(getCategory)  {
    landingPage.classList.add("hide");
    getCategory.classList.remove("hide"); }

function home()  {
    landingPage.classList.remove("hide"); 
    organ.classList.add("hide");
    color.classList.add("hide");
    fruit.classList.add("hide");
    vegetable.classList.add("hide"); }

const red = new Audio();      red.src = "red.opus";
const orange = new Audio();   orange.src = "orange.opus";
const yellow = new Audio();   yellow.src = "yellow.opus";
const green = new Audio();    green.src = "green.opus";
const blue = new Audio();     blue.src = "blue.opus";
const indigo = new Audio();   indigo.src = "indigo.opus";
const violet = new Audio();   violet.src = "violet.opus";

const lungs = new Audio();   lungs.src = "audios/lungs.opus";
const kidney = new Audio();   kidney.src = "kidney.opus";