document.addEventListener("DOMContentLoaded", function () {
  let containers = document.querySelectorAll(".filter_portfolio_cont");
  containers.forEach(function (container, index) {
    if (index !== containers.length - 1) {
      container.classList.add("not-last-child");
    }
  });
});
