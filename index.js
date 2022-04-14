const btn = document.getElementById("btn");
const id = document.querySelector(".card-header");
const advice = document.querySelector(".card-text");

const fetchAdvice = async () => {
     const res = await fetch("https://api.adviceslip.com/advice");
     const data = await res.json();
   
     id.innerHTML = `Advice #${data.slip.id}`;
     advice.innerHTML = `"${data.slip.advice}"`;
}
   
fetchAdvice();

btn.addEventListener("click",fetchAdvice);