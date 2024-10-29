document.addEventListener("DOMContentLoaded", function () {
  const websites = [
    {
      title: "TTP - Concept Web design",
      description:
        "Travel agency, Web-site, Brand, Blog. One of my favorite projects, in which I was fortunate enough to realize my creative ideas as a web designer and gain wonderful user research experience.",
      descriptionUa:
        "Одним з моїх улюблених проектів, в якому мені пощастило реалізувати свої творчі ідеї як веб-дизайнера і отримати чудовий досвід дослідження користувачів",
      image: "/imgs/oneimgg.jpg",
      url: "https://www.behance.net/gallery/198912453/TTP-Webdesign-Concept-Travel-Agency-Blog",
    },
    {
      title: "PRO Market - Ecommerce",
      description:
        "Design of an online store for children's goods and home products. The project was implemented taking into account the features of the OpenCart platform.",
      descriptionUa:
        "Дизайн інтернет-магазину дитячих товарів та товарів для дому. Проект реалізовано з урахуванням особливостей платформи OpenCart.",
      image: "/imgs/threeimg.jpg",
      url: "https://www.behance.net/gallery/84092213/PRO-Market-store-Ecommerce-Web-design",
    },
  ];

  const apps = [
    {
      title: "Pluton Secure Crypto Wallet",
      description:
        "The Pluton project became one of the most interesting and challenging in my practice. It involved not only web design and adaptive application development but also a deep dive into the crypto industry.",
      descriptionUa:
        "Проект «Плутон» став одним з найцікавіших і найскладніших у моїй практиці. Він включав в себе не тільки веб-дизайн і розробку адаптивного застосунку, а й глибоке занурення в криптоіндустрію.",
      image: "/imgs/twoimg.jpg",
      url: "https://www.behance.net/gallery/206172307/Pluton-App-Design-Secure-Cryptocurrency-Wallet",
    },
  ];

  const logos = [
    {
      title: "BIONUS - logotype design",
      description:
        "This project is based on the creation of biodegradable disposable tableware made using the Leo, Hemp and Soy bio-composite. I created the pesonal logo taking into account the idea of the brand concept",
      descriptionUa:
        "Цей проект базується на створенні біорозкладного одноразового посуду, виготовленого з використанням біокомпозиту льону, конопель та сої, тощо. Я створив персональний логотип з урахуванням ідеї концепції бренду",
      image: "/imgs/fourimg.jpg",
      url: "https://www.behance.net/gallery/95498249/BIONUS-logotype-design",
    },
  ];

  const graphics = [
    {
      title: "Redesign Chess.com platform",
      description:
        "This is a competition project for Chess.com, the task of which is to create a new design in accordance with modern trends. It was a great pleasure to realize my creative potential in this contest",
      descriptionUa:
        "Це конкурсний проект для Chess.com, завданням якого є створення нового дизайну відповідно до сучасних тенденцій. Мені було дуже приємно реалізувати свій творчий потенціал у цьому конкурсі",
      image: "/imgs/chessimg.jpg",
      url: "https://www.behance.net/gallery/118562443/Redesign-Chesscom-platform",
    },
  ];

  let currentCategory = websites;
  let currentWorkIndex = 0;

  const imgPortfolio = document.querySelector(".photo_portfolio");
  const tittlePrev = document.querySelectorAll(".filter_portfolio_cont")[1];
  const workDescription = document.getElementById("work_descript");
  const workLink = document.querySelector(".link_my_work");
  const btnNext = document.querySelector(".btn_next");

  let currentLanguage; // Установка значения по умолчанию до загрузки страницы

  // Загрузка языка из localStorage при загрузке страницы
  function loadLanguage() {
    let lang = localStorage.getItem("lang");
    if (!lang) {
      lang = "en"; // Установка английского языка по умолчанию, если язык не найден
    }
    setLanguage(lang);
  }

  function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("lang", language); // Сохраняем выбранный язык в localStorage
    updateDisplayedWork();
  }

  // Получаем ссылку на элемент select для выбора языка
  const langSelect = document.querySelector(".change_lang");
  langSelect.addEventListener("change", function () {
    setLanguage(this.value);
  });

  function updateDisplayedWork() {
    const currentWork = currentCategory[currentWorkIndex];
    const description =
      currentLanguage === "ua"
        ? currentWork.descriptionUa
        : currentWork.description;
    imgPortfolio.style.backgroundImage = `url(${currentWork.image})`;
    tittlePrev.querySelector("#tittle_three").textContent = currentWork.title;
    workDescription.textContent = description;
    workLink.href = currentWork.url;
    workLink.target = "_blank";
  }

  function selectCategory(category) {
    currentCategory = category;
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
    currentWorkIndex = (currentWorkIndex + 1) % currentCategory.length;
    updateDisplayedWork();
  }

  document.getElementById("linkOne1").addEventListener("click", (event) => {
    event.preventDefault();
    selectCategory(websites);
    setActiveCategory("linkOne1");
  });

  document.getElementById("linkTwo2").addEventListener("click", (event) => {
    event.preventDefault();
    selectCategory(apps);
    setActiveCategory("linkTwo2");
  });

  document.getElementById("linkThree3").addEventListener("click", (event) => {
    event.preventDefault();
    selectCategory(logos);
    setActiveCategory("linkThree3");
  });

  document.getElementById("linkFour4").addEventListener("click", (event) => {
    event.preventDefault();
    selectCategory(graphics);
    setActiveCategory("linkFour4");
  });

  btnNext.addEventListener("click", (event) => {
    event.preventDefault();
    onNextButtonClick();
  });

  setActiveCategory("linkOne1");
  loadLanguage(); // Вызываем функцию загрузки языка при загрузке страницы
});
