//! условные операторы
//! тернарный оператор
// ! условие ? () : ()
// 1
// let currentUser = false;
// currentUser
//   ? alert("добро пожаловать")
//   : alert("зарегист. или войдите в свой акк");

// 2
// let password = prompt("введите пароль");
// let passwordConfirm = prompt("подтвердите пароль");
// password === passwordConfirm
//   ? alert("вы успешно подтвердили пароль")
//   : alert("пароли не совпадают");

// 3
// let age = prompt("сколько вам лет?");
// age >= 18 ? console.log("добро пожаловать") : console.log("доступ запрещен");

// 4
// let role = "admin";
// role === "admin"
//   ? alert("вы можете редактировать группу")
//   : alert("у вас нет прав на редактирование");

// 5
// let productsCount = 10;
// productsCount > 0
//   ? alert(`в корзине ${productsCount} товаров`)
//   : alert("корзина пустая");

//! if / if ... else / if...else if...else  if...else
// 1
// let name = prompt("введите имя");
// if (name === "John") {
//   alert(`привет ${name}`); //используем косые ковычки чтоб взять значение из переменной
// }

// 2
// let age = 20;
// let canDrive = null;
// if (age > 17) {
//   canDrive = true;
// } else {
//   canDrive = false;
// }
// console.log(canDrive);

// 3
// let startTime = 9;
// let arrive = 9;
// if (arrive >= startTime) {
//   console.log("Можем зайти");
// } else {
//   console.log("не впускают в офис, закрыто");
// }

// 4
// let num1 = +prompt("первое число");
// let operator = prompt("математ.оператор");
// let num2 = +prompt("второе число");
// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alert(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// } else {
//   alert("ошибка! введите коррректный оператор");
// }

// ! switch case
// let season = +prompt("выберите сезон");
// switch (season) {
//   // season === 1
//   // "1"
//   case 1:
//     console.log("зима");
//     break;
//   case 2:
//     console.log("Весна");
//     break;
//   case 3:
//     console.log("Лето");
//     break;
//   case 4:
//     console.log("осень");
//     break;
//   default:
//     console.log("выберите число от 1 до 4");
// }

// CREATE, READ, UPDATE, DELETE -> CRUD - operations
// let action = "UPDATE";
// switch (action) {
//   case "CREATE":
//     alert("создан профиль");
//     break;
//   case "READ":
//     alert("есть отображение");
//     break;
//   case "UPDATE":
//     alert("профиль отредактирован");
//     break;
//   case "DELETE":
//     alert("профиль удален");
//     break;
//   default:
//     alert("действие не относится к CRUD!");
// }

// let day = prompt("выберите день недели");
// switch (day) {
//   case "1":
//     console.log("пн");
//     break;
//   case "2":
//     console.log("вт");
//     break;
//   case "3":
//     console.log("ср");
//     break;
//   case "4":
//     console.log("чт");
//     break;
//   case "5":
//     console.log("пт");
//     break;
//   case "6":
//     console.log("сб");
//     break;
//   case "7":
//     console.log("вс");
//     break;
//   default:
//     console.log("это не день недели");
// }

// !логическое И - &&
// let bread = "baton";
// let product1 = "молоко";
// if (bread === "baton" && product1 === "молоко") {
//   alert("взяли нужное!");
// } else {
//   alert("не то, что нужно!");
// }

// логическое ИЛИ - ||
// let product = "лепешка";
// if (product === "лепешка" || product === "батон") {
//   alert("правильно");
// } else {
//   alert("неправильно");
// }

//! 10
//! 22
// let arrive = prompt("во сколько вы пришли?");
// if (arrive >= 10 && arrive <= 22) {
//   alert("офис открыт");
// } else {
//   alert("офис закрыт");
// }

//! данные из базы данных
// email: user123
// password: ps123

// const email = prompt("введите электр почту");
// const password = prompt("введите пароль");
// if (email === "user123" && password === "ps123") {
//   alert("вы успешно вошли в свой акк");
// } else {
//   alert("email или пароль неверные");
// }

// const email = prompt("введите электр почту");
// const password = prompt("введите пароль");
// console.log(email, password);
// // console.log(Boolean(email));
// if (email === null || password === null || email === "" || password === "") {
//   alert("заполните поля");
// } else {
//   // alert("есть данные");
//   if (email === "user123" && password === "ps123") {
//     alert("вы успешно вошли в свой акк");
//   } else {
//     alert("email или пароль неверные");
//   }
// }

// let password = prompt("введите пароль");
// const tries = 1;
// if (password === "ps123") {
//   alert("пароль введен правильно");
// } else {
//   password = prompt("попробуйте заново ввести пароль");
//   console.log(password);
//   if (password === "ps123") {
//     alert("пароль введен правильно");
//   } else {
//     alert("ваш акк заблокирован!");
//   }
// }

// const email = prompt("введите электр почту");
// if (email === "user123") {
//   let password = prompt("введите пароль");
//   if (password === "ps123") {
//     alert("logged in!");
//   }
// }

// let answer = confirm("Вы хотите покинуть игру?");
// console.log(answer);
// if (answer) {
//   alert("Вы покинули игру");
// } else {
//   alert("Ура, вы остались. Поиграем еще!");
// }

//! инкремент - увеличить на 1 (++)
//! декремент - уменьшить на 1 (--)
// ! интерполяция - встроенное выражение
// let likes = 5;
// let answer = confirm("Вы хотите поставить лайк?");
// if (answer) {
//   likes++; //инкремент
//   alert(`Вы поставили лайк, всего лайков:${likes}`);
// }
// answer = confirm("Вы хотите поставить лайк?");
// if (answer) {
//   likes++; //инкремент
//   alert(`Вы поставили лайк, всего лайков:${likes}`);
// }
// answer = confirm("Вы хотите поставить лайк?");
// if (answer) {
//   likes++; //инкремент
//   alert(`Вы поставили лайк, всего лайков:${likes}`);
// }

// let tasksInClassroom = confirm("вы выполнили задание из классрума?");
// let tasksOnPlatform = confirm("вы выполнили задание из makers.courses?");
// if (tasksInClassroom && tasksOnPlatform) {
//   alert("У вас будет высокий KPI");
// } else {
//   alert("У вас будет низкий KPI");
// }

// momentum or teamflow

let homework = "momentum";
if (homework === "momentum" || homework === "teamflow") {
  alert("100 баллов");
} else {
  alert("0 баллов");
}
