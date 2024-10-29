document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".btns_container button");
  let descriptionParagraph = document.querySelector(".text_descript_my_skill");
  let descriptionsEn = [
    "My UX experience includes conducting user research, data analysis, and developing intuitive interfaces for digital products. In my work, I pay special attention to details, using a flexible approach based on Agile principles.",
    "My marketing experience helps me understand business needs, while development skills allow me to implement workable and simple solutions in design. I am equally comfortable working on the global vision of the product and elaborating the finest details of the user experience.",
    "Artistic skills allow me to create creative solutions for digital products, including banners, advertising materials, website designs, and space designs. To achieve this, I use modern tools and my accumulated knowledge.",
    "My desire to deepen my knowledge in technology has prompted me to study web development, allowing me to enhance my design skills and gain a deeper understanding of the relationship between web design and its implementation.",
  ];
  let descriptionsUa = [
    "Мій досвід у UX включає проведення користувацьких досліджень, аналіз даних та розробку інтуїтивних інтерфейсів для цифрових продуктів. У роботі я приділяю особливу увагу деталям, використовуючи гнучкий підхід, заснований на принципах Agile.",
    "Мій досвід у маркетингу допомагає розуміти бізнес-потреби, а навички розробки дозволяють реалізувати в дизайні робочі та прості рішення. Я однаково комфортно почуваюся як у роботі над глобальним баченням продукту, так і в опрацюванні найдрібніших його деталей.",
    "Художні навички дозволяють мені створювати креативні рішення для цифрових продуктів таких як: банери, рекламні матеріали, оформлення веб-сайтів та дизайн простору. Для цього я застосовую сучасні інструменти та свої напрацьовані знання.",
    "Бажання поглибити свої знання в галузі технологій спонукало мене вивчати веб-розробку, що дозволяє мені покращувати свої навички в дизайні та глибше усвідомлювати взаємозв’язок між дизайном і його реалізацією.",
  ];

  function changeLanguageDescription(lang) {
    if (lang === "en") {
      return descriptionsEn;
    } else if (lang === "ua") {
      return descriptionsUa;
    }
  }

  let lang = document.querySelector("select").value;
  let descriptions = changeLanguageDescription(lang);
  buttons[0].classList.add("active");
  descriptionParagraph.textContent = descriptions[0];

  // Функция для изменения описания и добавления классов при наведении
  function handleHover() {
    buttons.forEach(function (button, index) {
      button.addEventListener("mouseenter", function () {
        let lang = document.querySelector("select").value;
        let descriptions = changeLanguageDescription(lang);
        descriptionParagraph.textContent = descriptions[index];

        // Удаление активного класса у всех кнопок и добавление его только к текущей
        buttons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });

    document
      .querySelector(".btns_container")
      .addEventListener("mouseleave", function () {
        buttons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        buttons[0].classList.add("active");
        let lang = document.querySelector("select").value;
        let descriptions = changeLanguageDescription(lang);
        descriptionParagraph.textContent = descriptions[0];
      });
  }

  // Проверяем ширину экрана и устанавливаем соответствующие обработчики событий
  if (window.innerWidth > 1024) {
    handleHover();
  }

  // Обработчик события для изменения обработчиков при изменении размеров окна
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      handleHover();
    } else {
      buttons.forEach(function (button) {
        button.removeEventListener("mouseenter", null);
      });
    }
  });

  // Обработчик события для кликов на кнопки
  function handleClick() {
    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        let lang = document.querySelector("select").value;
        let descriptions = changeLanguageDescription(lang);
        descriptionParagraph.textContent = descriptions[index];

        // Удаление активного класса у всех кнопок и добавление его только к текущей
        buttons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });
  }

  // Добавляем обработчики событий для кликов, если ширина экрана меньше 1024 пикселей
  if (window.innerWidth <= 1024) {
    handleClick();
  }

  // Обработчик события для сброса классов и вывода описания по умолчанию при клике на контейнер или другом месте
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".btns_container")) {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      buttons[0].classList.add("active");
      let lang = document.querySelector("select").value;
      let descriptions = changeLanguageDescription(lang);
      descriptionParagraph.textContent = descriptions[0];
    }
  });

  document.querySelector("select").addEventListener("change", function () {
    let lang = this.value;
    localStorage.setItem("selectedLanguage", lang);
  });

  let selectedLang = localStorage.getItem("selectedLanguage");
  if (selectedLang) {
    document.querySelector("select").value = selectedLang;
    lang = selectedLang;
    descriptions = changeLanguageDescription(lang);
    descriptionParagraph.textContent = descriptions[0];
  }
});
