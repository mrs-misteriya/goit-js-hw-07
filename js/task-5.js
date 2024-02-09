// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль
//  по кліку на button.change - color і задає це значення кольору текстовим 
//  вмістом для span.color.

{/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickButton() {

  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = "- " + getRandomHexColor();

}

buttonEl.addEventListener("click", onClickButton);


