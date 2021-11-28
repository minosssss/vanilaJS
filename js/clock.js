const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    //padStart는 길이를 조정해주고, 글자를 지정하여 채움
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 로딩 후 *초 마다
// setTimeout(sayHello, 5000); 로딩 후 *번만