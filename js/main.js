const login_btn = document.querySelector(".login-btn");

login_btn.addEventListener("click", function () {
  document.getElementById("xpSound").play();
  setTimeout(function () {
    window.location.href = "dashboard.html";
  }, 4000);
  return;
});
