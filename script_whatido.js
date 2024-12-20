document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btns_container button");
  const descriptionParagraph = document.querySelector(
    ".text_descript_my_skill"
  );

  // Функція для оновлення класу active
  function setActiveButton(index) {
    buttons.forEach(function (button) {
      button.classList.remove("active");
    });
    buttons[index].classList.add("active");
  }

  // Для десктопу використовуємо ховер
  if (window.innerWidth > 1024) {
    buttons.forEach(function (button, index) {
      button.addEventListener("mouseenter", function () {
        // Оновлюємо опис
        const lang = window.location.hash.substring(1) || "en";
        descriptionParagraph.textContent =
          langArray["descriptions"][lang][index];

        // Встановлюємо активну кнопку
        setActiveButton(index);
      });
    });
  }

  // Для мобільних та планшетів використовуємо клік
  if (window.innerWidth <= 1024) {
    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        // Оновлюємо опис
        const lang = window.location.hash.substring(1) || "en";
        descriptionParagraph.textContent =
          langArray["descriptions"][lang][index];

        // Встановлюємо активну кнопку
        setActiveButton(index);
      });
    });
  }

  // Встановлюємо текст за замовчуванням для першої кнопки
  const lang = window.location.hash.substring(1) || "en";
  descriptionParagraph.textContent = langArray["descriptions"][lang][0];
  setActiveButton(0); // Перша кнопка за замовчуванням

  // Додаємо слухач для зміни розміру вікна
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      buttons.forEach(function (button, index) {
        button.removeEventListener("click", null); // Видаляємо події кліку
      });
      buttons.forEach(function (button, index) {
        button.addEventListener("mouseenter", function () {
          const lang = window.location.hash.substring(1) || "en";
          descriptionParagraph.textContent =
            langArray["descriptions"][lang][index];
          setActiveButton(index);
        });
      });
    } else {
      buttons.forEach(function (button, index) {
        button.removeEventListener("mouseenter", null); // Видаляємо події ховеру
      });
      buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
          const lang = window.location.hash.substring(1) || "en";
          descriptionParagraph.textContent =
            langArray["descriptions"][lang][index];
          setActiveButton(index);
        });
      });
    }
  });
});
