let fontSize = 100;

const makeBigger = () => {
  fontSize += 10;
  document.querySelector("div.content").style.fontSize = `${fontSize}%`;
  document.querySelector("h1").style.fontSize = `${fontSize}%`;
};

const makeSmaller = () => {
  fontSize -= 10;
  document.querySelector("div.content").style.fontSize = `${fontSize}%`;
  document.querySelector("h1").style.fontSize = `${fontSize}%`;
};

document.querySelector("#a1").addEventListener("click", makeBigger);
document.querySelector("#a2").addEventListener("click", makeSmaller);
("");
