var lightMode = true;
const switchMode = (e) => {
  if (lightMode) {
    lightMode = false;
    document.documentElement.style.setProperty("--bg-color", "#141414");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--link-color", "#0000ee");
    document.documentElement.style.setProperty("--navbar-color", "#441f94");
    document.documentElement.style.setProperty("--dd-color", "#ffffff");
    document.documentElement.style.setProperty("--dd-bg-color", "#242424");
  } else {
    lightMode = true;
    document.documentElement.style.setProperty("--bg-color", "#ffffff");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--link-color", "#0000ee");
    document.documentElement.style.setProperty("--navbar-color", "#494cff");
    document.documentElement.style.setProperty("--dd-color", "#000000");
    document.documentElement.style.setProperty("--dd-bg-color", "#ffffff");
  }
};
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    document.getElementById("navbar").classList.add("scroll-top");
  } else {
    document.getElementById("navbar").classList.remove("scroll-top");
  }
});
