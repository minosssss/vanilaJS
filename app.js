const h1 = document.querySelector("div.minO h1");

function handleTitleClick() {
    //toggle은 class에 해당 이름이 존재하면 없애주고, 존재하지 않는다면 추가해줌 
    h1.classList.toggle('clicked');
}

h1.addEventListener("click", handleTitleClick);

