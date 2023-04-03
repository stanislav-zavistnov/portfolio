// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
let arr = [];
let standardButton = document.querySelector('.standard-js');
let slowButton = document.querySelector('.oneSec');
let slowButtonTwo = document.querySelector('.twoSec');
let divContainerElement = document.querySelector('.card-container');
let starRestartButton = document.querySelector('.btn-start');
standardButton.addEventListener('click', () => {
  standartSpeed = 50;
});
slowButton.addEventListener('click', () => {
  standartSpeed = 1000;
});
slowButtonTwo.addEventListener('click', () => {
  standartSpeed = 2000;
})
function createNumbersArray(count) {
  for (let i = 1; i <= (count * 2); i++) {
    arr.push(Number(i));
    arr.push(Number(i));
  }
  return arr;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  for (let i = (arr.length - 1); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек.
// У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function getShuffleArray(count) {
  createNumbersArray(count);
  shuffle(arr);
  return arr;
}

function createGameArea() {
  let a = [];
  for (i = 0; i < arr.length; i++) {
    a[i] = document.createElement('div');
    a[i].classList.add('closed-card');
    a[i].classList.add('divEl');
    a[i].textContent = Number(arr[i]);
    a[i].idEl = (i + 1);
    newElement = a[i];
    divContainerElement.append(newElement);
  }
  return newElement;
}

function clearGameArea() {
  divContainerElement.textContent = '';
  arr = [];
}

function startGame() {
  clearGameArea();
  getShuffleArray(4);
  createGameArea();
  operate();
}

function operate() {
  let comparisonArray = [];
  let trueCards = [];
  divContainerElement.addEventListener('click', function (e) {
    if (e.target.classList.contains('closed-card')) {
      e.target.classList.remove('closed-card');
      e.target.classList.add('opened-card');
      comparisonArray.push(e.target);
    };
    if (comparisonArray.length === 2) {
      let a = comparisonArray[0].textContent;
      let b = comparisonArray[1].textContent;
      if (a != b) {
        setTimeout(() => {
          comparisonArray[0].classList.remove('opened-card');
          comparisonArray[0].classList.add('closed-card');
          comparisonArray[1].classList.remove('opened-card');
          comparisonArray[1].classList.add('closed-card');
          comparisonArray.splice(0, 2);
        }, 50);
      } else {
        trueCards.push(comparisonArray[0]);
        trueCards.push(comparisonArray[1]);
        comparisonArray.splice(0, 2);
      }
    };
    if (trueCards.length === arr.length) {
      divContainerElement.textContent = 'ПОБЕДА!'
      trueCards = [];
    }
  })
}

starRestartButton.addEventListener('click', startGame);
// divContainerElement.addEventListener('click',e => console.log(e.target))
// divContainerElement.addEventListener('click', function(e) {
//   e.target.classList.remove('closed-card');
//   e.target.classList.add('opened-card');
// })
