
// Є input, у який користувач вводить бажану кількість елементів.Після 
// натискання на кнопку Create має рендеритися(додаватися в DOM) колекція 
// з відповідною кількістю елементів і очищатися значення в інпуті.
// При повторному натисканні на кнопку Create поверх старої колекції має 
// рендеритись нова.Після натискання на кнопку Destroy колекція елементів 
// має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати 
// значення в input, воно має бути в межах від 1 до 100 включно.Тільки 
// якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.


// Для рендеру елементів на сторінці створи функцію createBoxes(amount),
//   яка приймає один параметр — число, що зберігає кількість елементів для
// рендеру.Функція має створювати стільки < div > елементів, скільки 
// вказано в параметрі amount і додавати їх у DOM дочірніми елементами 
// для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього 
// на 10px.
// Усі елементи повинні мати випадковий колір фону.Використовуй готову 
// функцію getRandomHexColor() для отримання випадкового кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Для очищення колекції після натискання на кнопку Destroy створи 
// функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб 
// видаляючи всі створені елементи.


const divEl = document.querySelector("#controls");
const creatingEl = document.querySelector("button[data-create]");
const destroingEl = document.querySelector("button[data-destroy]");
const inputEl = divEl.firstElementChild;

inputEl.classList.add("input");
creatingEl.classList.add("create");
destroingEl.classList.add("destroy");


function onCreateButton(event) {
  const eventValue = event.target.value;
  if (eventValue >= 1 && eventValue <= 100) {
    return createBoxes(eventValue);
  } else {
    return destroyBoxes();
  };
};


function createBoxes(amount) {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  };

  for (let index = 0; index < amount; index++) {
    let size = 30;
    const color = getRandomHexColor();
    divEl.insertAdjacentHTML("beforeend",
    `<div class = "div-element"
      style = "width: ${size}px; height: ${size}px; background-color: ${color};">
    </div>`);
     size += 10;
  }
};

function destroyBoxes(){
  inputEl.value = '';
  
};

inputEl.addEventListener("input", onCreateButton);
creatingEl.addEventListener("click", onCreateButton);
destroingEl.addEventListener("click", destroyBoxes);