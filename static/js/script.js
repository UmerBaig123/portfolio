var lightMode = true;
const switchMode = (e) => {
  const switch_circle = document.getElementById("switch-circle");
  if (lightMode) {
    lightMode = false;
    document.documentElement.style.setProperty("--bg-color", "#141414");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--link-color", "#0000ee");
    document.documentElement.style.setProperty("--navbar-color", "#441f94");
    document.documentElement.style.setProperty("--dd-color", "#ffffff");
    document.documentElement.style.setProperty("--dd-bg-color", "#242424");
    document.documentElement.style.setProperty("--table-bg", "#242424");
    document.documentElement.style.setProperty("--switch-bg", "#666666");
    document.documentElement.style.setProperty("--switch-circle-bg", "#F0F0F0");
    document.documentElement.style.setProperty(
      "--card-bg",
      "rgb(125, 36, 141)"
    );
    switch_circle.style.left = "calc(100% - 34px)";
  } else {
    lightMode = true;
    document.documentElement.style.setProperty("--bg-color", "#ffffff");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--link-color", "#0000ee");
    document.documentElement.style.setProperty("--navbar-color", "#494cff");
    document.documentElement.style.setProperty("--dd-color", "#000000");
    document.documentElement.style.setProperty("--dd-bg-color", "#ffffff");
    document.documentElement.style.setProperty("--table-bg", "#ffffff");
    document.documentElement.style.setProperty("--card-bg", "#ffffff");
    document.documentElement.style.setProperty(
      "--switch-bg",
      "rgb(144, 216, 234)"
    );
    document.documentElement.style.setProperty(
      "--switch-circle-bg",
      "rgb(255, 186, 38)"
    );
    switch_circle.style.left = "2px";
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
  const json = await fetch("./static/js/user_config.json");
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
const load_text = (language) => {
  fetch(`./static/js/languages/${language}.json`)
    .then((response) => response.json())
    .then((text) => {
      document.getElementById("home_nav").innerHTML = text.home;
      document.getElementById("repo_nav").innerHTML = text.repositories;
      document.getElementById("repositories").textContent = text.repositories;
      document.getElementById("skills_nav").innerHTML = text.skills;
      document.getElementById("skills").textContent = text.skills;
      document.getElementById("experience_nav").innerHTML = text.experience;
      document.getElementById("experience").textContent = text.experience;
      document.getElementById("education").textContent = text.education;
      document.getElementById("education_nav").innerHTML = text.education;
      document.getElementById("language_select").textContent =
        text.select_language;
      document.getElementById("summary").textContent = text.summary;
      document.getElementById("exp1-title").textContent = text.exp1_title;
      document.getElementById("exp1-desc").textContent = text.exp1_desc;
      document.getElementById("exp2-title").textContent = text.exp2_title;
      document.getElementById("exp2-desc").textContent = text.exp2_desc;
    });
};
load_text("english");
get_github_repos();
