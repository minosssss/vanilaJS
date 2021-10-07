// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
//form에서 발생한 submit 'event' 정보를 담을 용도로 
//onLoginSubmit 함수에 event라는 매개변수를 추가
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
    console.log(event);
}
// addEventListener는 function의 이름만 적어주면 ()없이도 브라우저가 자동으로 실행한다.
loginForm.addEventListener("submit",onLoginSubmit)