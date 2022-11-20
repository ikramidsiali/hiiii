const landingPage= document.querySelector(".landing");
const color= document.querySelector(".colors");
const organ= document.querySelector(".organs");
const fruit= document.querySelector(".fruits");
const vegetable= document.querySelector(".vegetables");
const kitchen= document.querySelector(".kitchenTools");
const Nature= document.querySelector(".nature");

function showCategory(getCategory)  {
    landingPage.classList.add("hide");
    getCategory.classList.remove("hide"); }

function home()  {
    landingPage.classList.remove("hide"); 
    organ.classList.add("hide");
    color.classList.add("hide");
    fruit.classList.add("hide");
    vegetable.classList.add("hide");
    kitchen.classList.add("hide");
    Nature.classList.add("hide"); }

const red = new Audio();      red.src = "audios/red.opus";
const pink = new Audio();   pink.src = "audios/pink.opus";
const gold = new Audio();   gold.src = "audios/gold.opus";
const yellow = new Audio();    yellow.src = "audios/yellow.opus";
const orange = new Audio();   orange.src = "audios/orange.opus";
const green = new Audio();    green.src = "audios/green.opus";
const blue = new Audio();     blue.src = "audios/blue.opus";
const purple = new Audio();     purple.src = "audios/purple.opus";
const brown = new Audio();   brown.src = "audios/brown.opus";
const white = new Audio();   white.src = "audios/white.opus";
const silver = new Audio();   silver.src = "audios/silver.opus";
const gray = new Audio();   gray.src = "audios/gray.opus";
const black = new Audio();   black.src = "audios/black.opus";


const lungs = new Audio();   lungs.src = "audios/lungs.opus";
const kidney = new Audio();   kidney.src = "audios/kidney.opus";