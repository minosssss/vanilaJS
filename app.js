// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

// 중요한 정보를 담거나 반복 되는 경우라면 대문자로 작성
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 
// const link = document.querySelector("a");

function onLoginSubmit(event) {
//form에서 발생한 submit 'event' 정보를 담을 용도로 
//onLoginSubmit 함수에 event라는 매개변수를 추가
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // classList는 선택된 Element에 해당 class를 넣어줌
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // 아래는 새로운 방식이며, 백틱(`)을 사용하여 ${} 대괄호 안에 넣음
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);    
// }

// addEventListener는 function의 이름만 적어주면 ()없이도 브라우저가 자동으로 실행한다.
loginForm.addEventListener("submit",onLoginSubmit)
// link.addEventListener("click", handleLinkClick)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}