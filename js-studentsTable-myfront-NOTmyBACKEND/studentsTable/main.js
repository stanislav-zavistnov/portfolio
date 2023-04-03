// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).
const submitButton = document.querySelector('.js-submit');
const inputBirthsday = document.querySelector('.js-birthsday');
const initialsColumn = document.querySelector('.js-fullnames');
const ageColumn = document.querySelector('.js-birthsdays');
const yearsOfStudyColumn = document.querySelector('.js-yearsOfstudies');
const facultyColumn = document.querySelector('.js-faculties');
const searchButton = document.querySelector('.js-search-submit');
const studentsTable = document.querySelector('.students-table');

studentsTable.addEventListener('click', (e) => {
  let a = e.target;
  for (let i = 0; i < studentsList.length; i++) {
    if (a.textContent === studentsList[i].id) {
      if (confirm(`Вы действительно хотите удалить студента ${studentsList[i].surname + ' ' + studentsList[i].name + ' ' + studentsList[i].lastname} из базы данных?`)) {
        deleteServerRecord(studentsList[i].id);
        studentsList.splice(i, 1);
        studentsTable.textContent = '';
        renderStudentsTable(studentsList);
      }
    }
  }
})

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.
const studentsList = [];
// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.
function getStudentItem(studentObj) {
  const studentsTable = document.querySelector('.students-table');
  const studentsTableList = document.createElement('ul');
  const fullName = studentObj.surname + ' ' + studentObj.name + ' ' + studentObj.lastname;
  const yearOfIssue = Number(studentObj.studyStart) + 4;
  studentsTableList.classList.add('students-list');
  studentsTable.append(studentsTableList);
  addElemInTable(fullName, studentsTableList, studentObj);
  addElemInTable((studentObj.birthday + ' ' + getActuallyStudentYearsOld(studentObj.birthday)), studentsTableList);
  addElemInTable((studentObj.studyStart + '-' + String(yearOfIssue) + ' ' + getActuallyStatusOfCource(studentObj.studyStart)), studentsTableList);
  addElemInTable(studentObj.faculty, studentsTableList);
}

// функция создания ячейки в таблице и добавления ключа и значения в эту ячейку. далее ячейка пушится в ul.
function addElemInTable(text, studentsTableList, studentObj = '') {
  const li = document.createElement('li');
  li.classList.add('students-list__item');
  li.textContent = text;
  const removeButton = document.createElement('button');
  removeButton.classList.add('removeButton');
  removeButton.textContent = studentObj.id;
  const fullName = studentObj.surname + ' ' + studentObj.name + ' ' + studentObj.lastname;
  if (text === fullName) {
    li.append(removeButton);
  }
  studentsTableList.append(li);
}

//определение возраста на текущий момент в цифре возраста. аргумент должен быть в формате строки дд.мм.гггг
function getActuallyStudentYearsOld(dateOfBirth) {
  let result;
  let resultString;
  const date = new Date();
  const actuallyYear = String(date.getFullYear());
  let actuallyMonth = String(date.getMonth() + 1);
  if (actuallyMonth.length < 2) {
    actuallyMonth = '0' + actuallyMonth;
  }
  let actuallyDay = String(date.getDate());
  if (actuallyDay.length < 2) {
    actuallyDay = '0' + actuallyDay;
  }
  const yearBirth = dateOfBirth[6] + dateOfBirth[7] + dateOfBirth[8] + dateOfBirth[9];
  const monthBirth = dateOfBirth[3] + dateOfBirth[4];
  const dayBirth = dateOfBirth[0] + dateOfBirth[1];
  let actuallyYearsOld = Number(actuallyYear) - Number(yearBirth);
  if (Number(actuallyMonth) < Number(monthBirth)) {
    actuallyYearsOld -= 1;
  }
  if (Number(actuallyMonth) === Number(monthBirth)) {
    if (Number(actuallyDay < Number(dayBirth))) {
      actuallyYearsOld -= 1;
    }
  }
  actuallyYearsOld = String(actuallyYearsOld);
  if (actuallyYearsOld[actuallyYearsOld.length - 1] == 1) {
    resultString = 'Год'
  } else if (actuallyYearsOld[actuallyYearsOld.length - 1] == 2 || actuallyYearsOld[actuallyYearsOld.length - 1] == 3 || actuallyYearsOld[actuallyYearsOld.length - 1] == 4) {
    resultString = 'Года'
  } else {
    resultString = 'Лет'
  }
  result = '(' + actuallyYearsOld + ' ' + resultString + ')'
  return result;
}

//определение номера курса, на котором учится студент. аргумент должен быть в формате строки дд.мм.гггг
function getActuallyStatusOfCource(studyStart) {
  let result;
  let returnResult;
  const date = new Date();
  const actuallyYear = String(date.getFullYear());
  let actuallyMonth = String(date.getMonth() + 1);
  if (actuallyMonth.length < 2) {
    actuallyMonth = '0' + actuallyMonth;
  }
  const monthStart = '09';
  let course = Number(actuallyYear) - Number(studyStart);
  if (course < 1) {
    result = '1 Курс';
  } else if (course === 1 && Number(actuallyMonth) < Number(monthStart)) {
    result = '1 Курс';
  } else if (course === 1 && Number(actuallyMonth) >= Number(monthStart)) {
    result = '2 Курс';
  } else if (course === 2 && Number(actuallyMonth) < Number(monthStart)) {
    result = '2 Курс';
  } else if (course === 2 && Number(actuallyMonth) >= Number(monthStart)) {
    result = '3 Курс';
  } else if (course === 3 && Number(actuallyMonth) < Number(monthStart)) {
    result = '3 Курс';
  } else if (course === 3 && Number(actuallyMonth) >= Number(monthStart)) {
    result = '4 Курс';
  } else if (course === 4 && Number(actuallyMonth) < Number(monthStart)) {
    result = '4 Курс';
  } else if (course === 4 && Number(actuallyMonth) >= Number(monthStart)) {
    result = 'Закончил';
  } else if (course > 4) {
    result = 'Закончил';
  }
  returnResult = '(' + result + ')';
  return returnResult;
}
// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.
function renderStudentsTable(studentsArray) {
  for (let i = 0; i < studentsArray.length; i++) {
    getStudentItem(studentsArray[i]);
    studentsArray[i].newDate = convertDate(studentsArray[i].birthday);
  }
}

function clearTable() {
  let tableContentWrapper = document.querySelector('.students-table');
  tableContentWrapper.replaceChildren();
}

async function loadAndRenderServerMemory() {
  let a = await loader();
  for (let i = 0; i < a.length; i++) {
    studentsList.push(a[i])
  }
  renderStudentsTable(studentsList);
  let b = document.querySelector('.removeButton');
  b.addEventListener('click', function (e) {
    console.log(e.currentTarget.textContent);
  })
}
loadAndRenderServerMemory();
// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.
function createDataArray() {
  //Inputs
  const nameInput = document.querySelector('.js-name');
  const surnameInput = document.querySelector('.js-surname');
  const middlenameInput = document.querySelector('.js-middlename');
  const birthsdayInput = document.querySelector('.js-birthsday');
  const yearStartInput = document.querySelector('.js-yearStart');
  const facultyInput = document.querySelector('.js-faculty');
  //inputs.value
  const getName = nameInput.value.toLowerCase().trim();
  const firstSymbolName = getName.substring(0, 1);
  const anothersSymbolsName = getName.substring(1);
  const finalName = firstSymbolName.toUpperCase() + anothersSymbolsName;
  const getSurname = surnameInput.value.toLowerCase().trim();
  const firstSymbolSurname = getSurname.substring(0, 1);
  const anothersSymbolsSurname = getSurname.substring(1);
  const finalSurname = firstSymbolSurname.toUpperCase() + anothersSymbolsSurname;
  const getMiddlename = middlenameInput.value.toLowerCase().trim();
  const firstSymbolMiddlename = getMiddlename.substring(0, 1);
  const anothersSymbolsMiddlename = getMiddlename.substring(1);
  const finalMiddlename = firstSymbolMiddlename.toUpperCase() + anothersSymbolsMiddlename;
  const getBirthsdayDate = birthsdayInput.value;
  const finalBirthsdayDate = getBirthsdayDate[8] + getBirthsdayDate[9] + '.' + getBirthsdayDate[5] + getBirthsdayDate[6] + '.' + getBirthsdayDate[0] + getBirthsdayDate[1] + getBirthsdayDate[2] + getBirthsdayDate[3];
  const getYearStart = String(yearStartInput.value);
  const getFaculty = facultyInput.value.toLowerCase().trim();
  const firstSymbolFaculty = getFaculty.substring(0, 1);
  const anothersSymbolsFaculty = getFaculty.substring(1);
  const finalFaculty = firstSymbolFaculty.toUpperCase() + anothersSymbolsFaculty;
  //create object
  const studentObject = {
    name: finalName,
    surname: finalSurname,
    lastname: finalMiddlename,
    birthday: finalBirthsdayDate,
    studyStart: getYearStart,
    faculty: finalFaculty,
  }

  return createServerRecord(studentObject);
}

function validate() {
  const validateArray = [];
  const todayDate = new Date();
  const todayYear = String(todayDate.getFullYear());
  let todayMonth = String(todayDate.getMonth() + 1);
  if (todayMonth.length < 2) {
    todayMonth = '0' + todayMonth;
  }
  let todayDay = String(todayDate.getDate());
  if (todayDay.length < 2) {
    todayDay = '0' + todayDay;
  }
  //DOM elements
  const nameInput = document.querySelector('.js-name');
  const surnameInput = document.querySelector('.js-surname');
  const middlenameInput = document.querySelector('.js-middlename');
  const birthsdayInput = document.querySelector('.js-birthsday');
  const yearStartInput = document.querySelector('.js-yearStart');
  const facultyInput = document.querySelector('.js-faculty');
  const failedBirthDescr = document.querySelector('.bd');
  const failedStartYearDescr = document.querySelector('.sy');
  //inputs quantity
  const getName = nameInput.value.toLowerCase().trim();
  const getSurname = surnameInput.value.toLowerCase().trim();
  const getMiddlename = middlenameInput.value.toLowerCase().trim();
  const getBirthsdayDate = birthsdayInput.value;
  const getBirthsdayYear = getBirthsdayDate[0] + getBirthsdayDate[1] + getBirthsdayDate[2] + getBirthsdayDate[3];
  const getBirthsdayMonth = getBirthsdayDate[5] + getBirthsdayDate[6];
  const getBirthsdayDay = getBirthsdayDate[8] + getBirthsdayDate[9];
  const getYearStart = String(yearStartInput.value);
  const getFaculty = facultyInput.value.toLowerCase().trim();
  //conditions
  if (!getName) {
    nameInput.classList.add('invalid-field');
    nameInput.placeholder = 'ЗАПОЛНИТЕ имя';
  } else {
    nameInput.classList.remove('invalid-field');
    nameInput.placeholder = 'Имя';
    validateArray.push(1);
  }
  if (!getSurname) {
    surnameInput.classList.add('invalid-field');
    surnameInput.placeholder = 'ЗАПОЛНИТЕ фамилию';
  } else {
    surnameInput.classList.remove('invalid-field');
    surnameInput.placeholder = 'Фамилия';
    validateArray.push(1);
  }
  if (!getMiddlename) {
    middlenameInput.classList.add('invalid-field');
    middlenameInput.placeholder = 'ЗАПОЛНИТЕ отчество';
  } else {
    middlenameInput.classList.remove('invalid-field');
    middlenameInput.placeholder = 'Отчество';
    validateArray.push(1);
  }
  if (!getYearStart) {
    yearStartInput.classList.add('invalid-field');
    yearStartInput.placeholder = 'ЗАПОЛНИТЕ год поступления';
  } else {
    yearStartInput.placeholder = 'Год начала обучения, например 2000';
  }
  if (!getFaculty) {
    facultyInput.classList.add('invalid-field');
    facultyInput.placeholder = 'ЗАПОЛНИТЕ факультет';
  } else {
    facultyInput.classList.remove('invalid-field');
    facultyInput.placeholder = 'Факультет';
    validateArray.push(1);
  }
  if (Number(todayYear) === Number(getBirthsdayYear)) {
    if (Number(todayMonth) === Number(getBirthsdayMonth)) {
      if (Number(todayDay) < Number(getBirthsdayDay)) {
        birthsdayInput.classList.add('invalid-field');
        failedBirthDescr.classList.add('js-birthsday-invalid');
      } else {
        birthsdayInput.classList.remove('invalid-field');
        failedBirthDescr.classList.remove('js-birthsday-invalid');
        validateArray.push(1);
      }
    } else if (Number(todayMonth) < Number(getBirthsdayMonth)) {
      birthsdayInput.classList.add('invalid-field');
      failedBirthDescr.classList.add('js-birthsday-invalid');
    } else {
      birthsdayInput.classList.remove('invalid-field');
      failedBirthDescr.classList.remove('js-birthsday-invalid');
      validateArray.push(1);
    }
  } else if (Number(todayYear) < Number(getBirthsdayYear)) {
    birthsdayInput.classList.add('invalid-field');
    failedBirthDescr.classList.add('js-birthsday-invalid');
  } else if (!getBirthsdayYear) {
    birthsdayInput.classList.add('invalid-field');
    failedBirthDescr.classList.add('js-birthsday-invalid');
  } else if (1900 > Number(getBirthsdayYear)) {
    birthsdayInput.classList.add('invalid-field');
    failedBirthDescr.classList.add('js-birthsday-invalid');
  } else {
    birthsdayInput.classList.remove('invalid-field');
    failedBirthDescr.classList.remove('js-birthsday-invalid');
    validateArray.push(1);
  }
  if (getYearStart < 2000) {
    yearStartInput.classList.add('invalid-field');
    failedStartYearDescr.classList.add('js-startYear-invalid');
  } else if (getYearStart > Number(todayYear)) {
    yearStartInput.classList.add('invalid-field');
    failedStartYearDescr.classList.add('js-startYear-invalid');
  } else {
    yearStartInput.classList.remove('invalid-field');
    failedStartYearDescr.classList.remove('js-startYear-invalid');
    validateArray.push(1);
  }
  return validateArray.length;
}

function clearTopInputs() {
  let nameInput = document.querySelector('.js-name');
  let surnameInput = document.querySelector('.js-surname');
  let middlenameInput = document.querySelector('.js-middlename');
  let birthsdayInput = document.querySelector('.js-birthsday');
  let yearStartInput = document.querySelector('.js-yearStart');
  let facultyInput = document.querySelector('.js-faculty');
  nameInput.value = '';
  surnameInput.value = '';
  middlenameInput.value = '';
  birthsdayInput.value = '';
  yearStartInput.value = '';
  facultyInput.value = '';
}

submitButton.addEventListener('click', async () => {
  clearTable();
  if (validate() === 6) {
    let a = await createDataArray();
    let loadedStudentObject = await getServerRecord(a.id);
    studentsList.push(loadedStudentObject);
    renderStudentsTable(studentsList);
    clearTopInputs();
  }
});
// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

function sortStudents(arr, prop, dir = false) {
  let result = arr.sort((a, b) => {
    let dirIf = a[prop] < b[prop];
    if (dir == true) {
      dirIf = a[prop] > b[prop];
    };
    if (dirIf == true) return -1;
  });
  return result;
};

function convertDate(stringDateClassicFormate) {
  const year = stringDateClassicFormate[6] + stringDateClassicFormate[7] + stringDateClassicFormate[8] + stringDateClassicFormate[9];
  const month = stringDateClassicFormate[3] + stringDateClassicFormate[4];
  const day = stringDateClassicFormate[0] + stringDateClassicFormate[1];
  const convertDate = year + '-' + month + '-' + day;
  return convertDate;
}

function sortDate(a, b) {
  const date1 = new Date(a['newDate']);
  const date2 = new Date(b['newDate']);

  return date1 - date2;
}

function sortDateAnotherDirection(a, b) {
  const date1 = new Date(a['newDate']);
  const date2 = new Date(b['newDate']);

  return date2 - date1;
}

let a = [1];

initialsColumn.addEventListener('click', () => {
  let result;
  if (a.length === 0) {
    result = sortStudents(studentsList, 'surname');
    a.push(1);
  } else if (a.length === 1) {
    result = sortStudents(studentsList, 'surname', true);
    a.splice(0, 1);
  }
  clearTable();
  renderStudentsTable(result);
});

ageColumn.addEventListener('click', () => {
  let result;
  if (a.length === 0) {
    result = studentsList.sort(sortDate);
    a.push(1);
  } else if (a.length === 1) {
    result = studentsList.sort(sortDateAnotherDirection);
    a.splice(0, 1);
  }
  clearTable();
  renderStudentsTable(result);
});

yearsOfStudyColumn.addEventListener('click', () => {
  let result;
  if (a.length === 0) {
    result = sortStudents(studentsList, 'studyStart');
    a.push(1);
  } else if (a.length === 1) {
    result = sortStudents(studentsList, 'studyStart', true);
    a.splice(0, 1);
  }
  clearTable();
  renderStudentsTable(result);
});

facultyColumn.addEventListener('click', () => {
  let result;
  if (a.length === 0) {
    result = sortStudents(studentsList, 'faculty');
    a.push(1);
  } else if (a.length === 1) {
    result = sortStudents(studentsList, 'faculty', true);
    a.splice(0, 1);
  }
  clearTable();
  renderStudentsTable(result);
});

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
function filter(arr, prop, value) {
  let result = [];
  let copy = [...arr];
  for (let i = 0; i < copy.length; i++) {
    if (String(arr[i][prop]).includes(value) == true) {
      result.push(arr[i]);
    };
  }
  return result
}

function filterWithInputs() {
  const searhByNameValue = (document.querySelector('.js-search-name').value).trim();
  const searhBySurnameValue = (document.querySelector('.js-search-surname').value).trim();
  const searhByMiddlenameValue = (document.querySelector('.js-search-middlename').value).trim();
  const searhByFacultyValue = (document.querySelector('.js-search-faculty').value).trim();
  const searhByYearStartValue = String(document.querySelector('.js-search-yearStart').value);
  const searhByYearFinishValue = String(document.querySelector('.js-search-yearFinish').value);
  const getName = searhByNameValue.toLowerCase();
  const firstSymbolName = getName.substring(0, 1);
  const anothersSymbolsName = getName.substring(1);
  const finalName = firstSymbolName.toUpperCase() + anothersSymbolsName;
  const getSurname = searhBySurnameValue.toLowerCase();
  const firstSymbolSurname = getSurname.substring(0, 1);
  const anothersSymbolsSurname = getSurname.substring(1);
  const finalSurname = firstSymbolSurname.toUpperCase() + anothersSymbolsSurname;
  const getMiddlename = searhByMiddlenameValue.toLowerCase();
  const firstSymbolMiddlename = getMiddlename.substring(0, 1);
  const anothersSymbolsMiddlename = getMiddlename.substring(1);
  const finalMiddlename = firstSymbolMiddlename.toUpperCase() + anothersSymbolsMiddlename;
  const getFaculty = searhByFacultyValue.toLowerCase();
  const firstSymbolFaculty = getFaculty.substring(0, 1);
  const anothersSymbolsFaculty = getFaculty.substring(1);
  const finalFaculty = firstSymbolFaculty.toUpperCase() + anothersSymbolsFaculty;
  let newArr = [...studentsList];
  if (finalName !== '') {
    newArr = filter(newArr, 'name', finalName);
  }
  if (finalSurname !== '') {
    newArr = filter(newArr, 'surname', finalSurname);
  }
  if (finalMiddlename !== '') {
    newArr = filter(newArr, 'lastname', finalMiddlename);
  }
  if (finalFaculty !== '') {
    newArr = filter(newArr, 'faculty', finalFaculty);
  }
  if (searhByYearStartValue !== '') {
    newArr = filter(newArr, 'studyStart', searhByYearStartValue);
  }
  if (searhByYearFinishValue !== '') {
    newArr = filter(newArr, 'studyStart', searhByYearFinishValue - 4);
  }
  return newArr;
}

function clearBottomInputs() {
  document.querySelector('.js-search-name').value = '';
  document.querySelector('.js-search-surname').value = '';
  document.querySelector('.js-search-middlename').value = '';
  document.querySelector('.js-search-faculty').value = '';
  document.querySelector('.js-search-yearStart').value = '';
  document.querySelector('.js-search-yearFinish').value = '';
}

searchButton.addEventListener('click', () => {
  let result = filterWithInputs();
  clearTable();
  renderStudentsTable(result);
  clearBottomInputs()
})

////////////////////////// СЕРВЕРНАЯ ЧАСТЬ /////////////////////////////////
async function loader() {
  const response = await fetch('http://localhost:3000/api/students');
  const data = await response.json();
  return data;
}
async function createServerRecord(newStudent) {
  const response = await fetch('http://localhost:3000/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newStudent)
  });
  const data = await response.json();
  return data;
}
async function getServerRecord(id) {
  const response = await fetch(`http://localhost:3000/api/students/${id}`)
  const data = await response.json();
  return data;
}
async function deleteServerRecord(id) {
  const response = await fetch(`http://localhost:3000/api/students/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
}

// async function changer() {
//   const response = await fetch('http://localhost:3000/api/students/1680094986195', {
//     method: 'PATCH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ NAZVANIEklucha: 'NOVOE_3NACHENIE' })
//   });
//   const data = await response.json();
//   console.log(data);
// }
