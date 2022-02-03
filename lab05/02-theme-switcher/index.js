/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

let state = "default";

const changeColor = (color) => {
  console.log(color);
  if (state === "default") {
    state = color;
    document.querySelectorAll("body > *").forEach(function (item) {
      item.classList.add(color);
    });
  } else {
    document.querySelectorAll("body > *").forEach(function (item) {
      item.classList.remove(state);
    });
    if (color !== "default") {
      document.querySelectorAll("body > *").forEach(function (item) {
        item.classList.add(color);
      });
    }
    state = color;
  }
};

document.querySelector("#default").addEventListener("click", () => {
  changeColor("default");
});
document.querySelector("#desert").addEventListener("click", () => {
  changeColor("desert");
});
document.querySelector("#ocean").addEventListener("click", () => {
  changeColor("ocean");
});
document.querySelector("#high-contrast").addEventListener("click", () => {
  changeColor("high-contrast");
});
