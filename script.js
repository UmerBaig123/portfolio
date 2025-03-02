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
  get_github_repos();
};
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    document.getElementById("navbar").classList.add("scroll-top");
  } else {
    document.getElementById("navbar").classList.remove("scroll-top");
  }
});
const get_github_repos = async () => {
  const json = await fetch("user_config.json");
  let data = await json.json();
  const userName = data.github_username;
  const selectedRepos = data.selectedRepos;
  var theme = lightMode ? "light" : "dark";
  fetch(`https://api.github.com/users/${userName}/repos`)
    .then((response) => response.json())
    .then((data) => {
      var repos = document.getElementById("repos");
      var injectionString = "";
      data.forEach((repo) => {
        console.log(repo.id);
        console.log(repo.name);
        if (selectedRepos.includes(repo.id)) {
          injectionString += `<a target="_blank" href="${repo.html_url}" class = "ppAnchor"><img src="https://github-readme-stats.vercel.app/api/pin/?username=${userName}&repo=${repo.name}&theme=${theme}&show_owner=true" alt="repo logo" class="repo-logo" style="height:fit-content;cursor:pointer" /></a>`;
        }
      });
      repos.innerHTML = injectionString;
    });
};
const show_more = (element, this_elem) => {
  if (this_elem.textContent.trim() == "Show More") {
    element.style.minHeight = "fit-content";
    element.style.height = "fit-content";
    this_elem.innerHTML = "Show Less";
  } else {
    element.style.minHeight = "320px";
    element.style.height = "320px";
    this_elem.innerHTML = "Show More";
  }
};
get_github_repos();
