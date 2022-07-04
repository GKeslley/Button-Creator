const form = document.querySelector("#controles");
const button = document.querySelector(".btn");
const cssText = document.querySelector(".css");

const buttonStyle = {
  element: button,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function formTarget(event) {
  const value = event.target.value;
  const name = event.target.name;
  buttonStyle[name](value);
  cssTextHtml();
}

function cssTextHtml() {
  cssText.innerHTML =
    "<span>" + button.style.cssText.split("; ").join(";</span><span>");
  console.log(cssText);
}

form.addEventListener("change", formTarget);
