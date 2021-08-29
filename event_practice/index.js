const thisIsPw = document.getElementById("password");
const thisIsRePw = document.getElementById("re-password");
const thisIsAlert = document.querySelector(".alert");

thisIsRePw.addEventListener("keyup", function (event) {
  if (thisIsPw.value !== thisIsRePw.value) {
    thisIsAlert.innerHTML = "비밀번호가 일치하지 않습니다";
  } else {
    thisIsAlert.innerHTML = "";
  }
});
