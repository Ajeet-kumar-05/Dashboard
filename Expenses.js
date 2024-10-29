document.querySelector("#open-popup2").addEventListener("click", function () {
  document.querySelector(".popup2").classList.add("active");
});

document
  .querySelector(".popup2 .close-btn2")
  .addEventListener("click", function () {
    document.querySelector(".popup2").classList.remove("active");
  });
