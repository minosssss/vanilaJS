const title = document.querySelector("div.minO h1");

console.dir(title);

function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color = 'blue';
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);