let img = document.querySelector(".zero");
let container=document.querySelector(".container");
function color(color){
    container.style.background = color;
}
function design(newsrc){
    img.src = newsrc;
    color();
}