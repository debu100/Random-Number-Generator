const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  // Generate number btn 1 and 10
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateNumber);

generateNumber();
// calling func so that it generates a random  number everytime when the page reloads

// const rand = Math.floor(Math.random() * 10 + 1);
// console.log(rand);
