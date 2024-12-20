// script_filter.js
document.addEventListener("DOMContentLoaded", function () {
  let currentCategory = langArray["websites"]; // За замовчуванням — категорія "websites"
  let currentWorkIndex = 0;

  const imgPortfolio = document.querySelector(".photo_portfolio");
  const tittlePrev = document.querySelectorAll(".filter_portfolio_cont")[1];
  const workDescription = document.getElementById("work_descript");
  const workLink = document.querySelector(".link_my_work");
  const btnNext = document.querySelector(".btn_next");

  function updateDisplayedWork() {
    const lang = window.location.hash.substring(1) || "en"; // Отримуємо поточну мову
    const currentWork = currentCategory[lang][currentWorkIndex];

    imgPortfolio.style.backgroundImage = `url(${currentWork.image})`;
    tittlePrev.querySelector("#tittle_three").textContent = currentWork.title;
    workDescription.textContent = currentWork.description;
    workLink.href = currentWork.url;
    workLink.target = "_blank";
  }

  function selectCategory(category) {
    currentCategory = langArray[category]; // Отримуємо дані з langArray.js
    currentWorkIndex = 0;
    updateDisplayedWork();
  }

  function setActiveCategory(categoryId) {
    const navLinks = document.querySelectorAll(".listNav_two > li > a");
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    document.getElementById(categoryId).classList.add("active");
  }

  function onNextButtonClick() {
    currentWorkIndex = (currentWorkIndex + 1) % currentCategory["en"].length; // Циклічно перемикаємося
    updateDisplayedWork();
  }

  document.getElementById("linkOne1").addEventListener("click", (event) => {
    event.preventDefault();
    selectCategory("websites");
    setActiveCategory("linkOne1");
  });

  document.getElementById("linkTwo2").addEventListener("click", (event) => {
    event.preventDefault();
    selectCategory("apps");
    setActiveCategory("linkTwo2");
  });

  document.getElementById("linkThree3").addEventListener("click", (event) => {
    event.preventDefault();
    selectCategory("logos");
    setActiveCategory("linkThree3");
  });

  document.getElementById("linkFour4").addEventListener("click", (event) => {
    event.preventDefault();
    selectCategory("graphics");
    setActiveCategory("linkFour4");
  });

  btnNext.addEventListener("click", (event) => {
    event.preventDefault();
    onNextButtonClick();
  });

  setActiveCategory("linkOne1");
  updateDisplayedWork(); // Оновлюємо відображення при завантаженні
});
