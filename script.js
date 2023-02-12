const theme = document.querySelector(":root");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.currentTarget.classList;
    if (color.contains("btn1")) {
      theme.style.setProperty("--theme-color", "#4682B4");
    } else if (color.contains("btn2")) {
      theme.style.setProperty("--theme-color", "#2E8B57");
    } else if (color.contains("btn3")) {
      theme.style.setProperty("--theme-color", "#D8BFD8");
    } else if (color.contains("btn4")) {
      theme.style.setProperty("--theme-color", "#FFDAB9");
    } else if (color.contains("btn5")) {
      theme.style.setProperty("--theme-color", "#2F4F4F");
    } else if (color.contains("btn6")) {
      theme.style.setProperty("--theme-color", "#cd5c5c");
    }
  });
});
