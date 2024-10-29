document.querySelector("#open-popup3").addEventListener("click", function () {
  document.querySelector(".popup3").classList.add("active");
});

document
  .querySelector(".popup3 .close-btn3")
  .addEventListener("click", function () {
    document.querySelector(".popup3").classList.remove("active");
  });
