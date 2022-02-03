/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
let dMode = false;

const changeDState = () => {
  dMode = !dMode;
  if (dMode) {
    document.querySelectorAll("body > *").forEach(function (item) {
      item.classList.add("dyslexia-mode");
    });
  } else {
    document.querySelectorAll("body > *").forEach(function (item) {
      item.classList.remove("dyslexia-mode");
    });
  }
};

document
  .querySelector("#dyslexia-toggle")
  .addEventListener("click", changeDState);
