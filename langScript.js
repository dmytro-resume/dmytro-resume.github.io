document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelector("select");
  const allLang = ["en", "ua"];

  if (!select) {
    console.error("Select element not found");
    return;
  }

  // Добавляем обработчик события change к элементу select
  select.addEventListener("change", function () {
    changeURLLanguage(select.value);
  });

  // Функция для изменения URL в зависимости от выбранного языка и обновления страницы
  function changeURLLanguage(lang) {
    location.href = window.location.pathname + "#" + lang;
    location.reload(); // Перезагружаем страницу
  }

  // Функция для изменения языка контента
  function changeLanguage() {
    let hash = window.location.hash.substring(1);
    if (!allLang.includes(hash)) {
      hash = "en"; // Если язык не найден, устанавливаем английский
      location.href = window.location.pathname + "#" + hash;
      location.reload(); // Перезагружаем страницу
    }

    select.value = hash; // Устанавливаем значение в select
    updateContent(hash); // Обновляем контент на странице
  }

  // Функция для обновления контента в зависимости от языка
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
  }

  // Вызываем функцию изменения языка контента при загрузке страницы
  changeLanguage();

  // Добавляем обработчик события hashchange
  window.addEventListener("hashchange", changeLanguage);
});
