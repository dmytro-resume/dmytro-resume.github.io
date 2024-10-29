document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".scroll-link");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки

      const targetId = this.getAttribute("href"); // Получаем ID элемента назначения
      const targetElement = document.querySelector(targetId); // Находим элемент по ID

      if (targetElement) {
        // Прокручиваем к элементу с плавной анимацией
        targetElement.scrollIntoView({
          behavior: "smooth", // Плавная прокрутка
          block: "start", // Прокручиваем к началу элемента
        });
      }
    });
  });
});
