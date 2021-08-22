const thisIsPw = document.getElementById("password").value;
const thisIsRePw = document.getElementById("re-password").value;
const thisIsAlert = document.getElementById("alert");
const thisIsButton = document.querySelector(".login-btn");

thisIsButton.addEventListener("click", function (event) {
  console.log(thisIsPw);
  console.log(thisIsRePw);

  if (thisIsPw !== thisIsRePw) {
    thisIsAlert.value = "비밀번호가 일치하지 않습니다";
    return;
  }

  if (thisIsPw === thisIsRePw) {
    thisIsAlert.value = " ";
    return;
  }
});
