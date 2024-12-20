document.addEventListener("DOMContentLoaded", function () {
  const allLang = ["en", "ua"];
  const select = document.querySelector("select");

  if (!select) {
    console.error("Select element not found");
    return;
  }

  // Перевірка та збереження вибору мови
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang && allLang.includes(savedLang)) {
    select.value = savedLang;
  } else {
    select.value = "en"; // За замовчуванням англійська
  }

  select.addEventListener("change", function () {
    const lang = select.value;
    localStorage.setItem("selectedLanguage", lang);
    changeURLLanguage(lang);
  });

  function changeURLLanguage(lang) {
    location.href = window.location.pathname + "#" + lang;
    location.reload();
  }

  function changeLanguage() {
    let hash = window.location.hash.substring(1);
    if (!allLang.includes(hash)) {
      hash = localStorage.getItem("selectedLanguage") || "en";
      location.href = window.location.pathname + "#" + hash;
      location.reload();
    }

    select.value = hash;
    updateContent(hash);
  }

  function updateContent(lang) {
    if (!langArray || !langArray["headtext"]) {
      console.error("langArray is not defined or malformed");
      return;
    }

    document.querySelector("title").innerHTML = langArray["headtext"][lang];
    for (let key in langArray) {
      const element = document.querySelector(`.lang-${key}`);
      if (element) {
        element.innerHTML = langArray[key][lang];
      }
    }

    // Оновлення тексту для "What I Do"
    const buttons = document.querySelectorAll(".btns_container button");
    const descriptionParagraph = document.querySelector(
      ".text_descript_my_skill"
    );
    if (buttons.length > 0 && descriptionParagraph) {
      buttons.forEach(function (button, index) {
        button.addEventListener("mouseenter", function () {
          descriptionParagraph.textContent =
            langArray["descriptions"][lang][index];
        });
      });
      descriptionParagraph.textContent = langArray["descriptions"][lang][0]; // Текст по замовчуванню
    }

    // Оновлення тексту для "Filter"
    const imgPortfolio = document.querySelector(".photo_portfolio");
    const tittlePrev = document.querySelectorAll(".filter_portfolio_cont")[1];
    const workDescription = document.getElementById("work_descript");
    const workLink = document.querySelector(".link_my_work");
    const btnNext = document.querySelector(".btn_next");

    const currentWork = langArray["websites"][lang][0]; // Змінити на актуальну категорію та елемент
    imgPortfolio.style.backgroundImage = `url(${currentWork.image})`;
    tittlePrev.querySelector("#tittle_three").textContent = currentWork.title;
    workDescription.textContent = currentWork.description;
    workLink.href = currentWork.url;
    workLink.target = "_blank";
  }

  changeLanguage();
  window.addEventListener("hashchange", changeLanguage);
});
