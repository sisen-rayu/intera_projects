import '../scss/style.scss';

// フィルタリング対象となるボタン要素と要素の配列を取得
const $filterButtons = Array.from(document.querySelectorAll(".select_button"));
const $filterItems = Array.from(document.querySelectorAll(".board_item"));

$filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.dataset.filter;

    const isAllFilter = filterValue === "all";
    const isCategoryFilter = (item) => item.classList.contains(filterValue);

    const filteredItems = [];
    $filterItems.forEach((item) => {
      if (isAllFilter || isCategoryFilter(item)) {
        filteredItems.push(item);
      }
    });

    $filterItems.forEach((item) => {
      if (filteredItems.includes(item)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
