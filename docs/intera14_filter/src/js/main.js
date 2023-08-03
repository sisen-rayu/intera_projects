

import '../scss/style.scss';




document.addEventListener("DOMContentLoaded", function () {
  const selectButtons = document.querySelectorAll(".select_button");
  const boardItems = document.querySelectorAll(".board_item");

  selectButtons.forEach((button) => {
      button.addEventListener("click", () => {
          const filterValue = button.dataset.filter;
          boardItems.forEach((item) => {
              if (filterValue === "all" || item.classList.contains(filterValue)) {
                item.style.display = "block";
              } else {
                item.style.display = "none";
              }
          });
      });
  });
});
