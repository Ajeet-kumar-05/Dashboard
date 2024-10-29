document.querySelector("#open-popup1").addEventListener("click", function () {
  document.querySelector(".popup1").classList.add("active");
});

document
  .querySelector(".popup1 .close-btn1")
  .addEventListener("click", function () {
    document.querySelector(".popup1").classList.remove("active");
  });
