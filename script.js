const menuBtn = document.querySelector(".header-top i");
const menu = document.querySelector(".header-top ul");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Đóng menu khi bấm ra ngoài
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});
// Hiển popup khi bấm nút tìm Kiếm
document.querySelector("form button").addEventListener("click", function (event) {
    event.preventDefault(); // không reload trang
    document.getElementById("popup").style.display = "flex";
});

// tắt popup
document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});
