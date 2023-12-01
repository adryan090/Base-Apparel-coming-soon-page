const errorMsg = document.querySelector(".error-msg");
const button = document.querySelector("button");
const errorIcon = document.querySelector(".error-icon");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  if (checkEmail() === false) {
    [input, errorIcon, errorMsg].forEach((el) => {
      el.classList.add("error");
    });
  } else {
    [input, errorIcon, errorMsg].forEach((el) => {
      el.classList.remove("error");
    });
  }
});

function checkEmail() {
  const text = input.value;
  const index = text.indexOf("@");
  const lastIndex = text.lastIndexOf("@");

  if (index !== lastIndex) return false;
  if (index === -1) return false;
  if (!index) return false;
  if (index + 1 >= text.length) return false;
  return true;
}
