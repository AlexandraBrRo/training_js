// alert("Привет, мир!");
// alert("Привет, JS!");

//ВОЗМОЖНОСТИ ПЕРЕМЕННЫХ
var message;//a-z, A-Z, 0-9, $, _
var Message;
var myMessage;
myMessage = "Сообщение";

//ОСНОВНЫЕ ТИПЫ ДАННЫХ
var myNumber = 10.154;//можно ставить как целое так и с плавающей точкой = 10.484; а также отрицательные значения
var myString = "Привет, Рома!";//переменная строка. Строки пишутся между кавычками. Могут быть и пустые строки
var myBoolean = true;//false;
var myNull = null;//пустое значение
var myUndefined = undefined;//значения у переменной нету

//ОБЪЕКТ
var myObject = {
	name:"Вася",
	age: 25
};

// //ЧИСЛА
// // var result = 40 + 10;
// // alert(result);
// alert(40 + 10);
// //можно тоже самое сделать через консоль
// console.log(40 + 10);
// console.log(40 + myNumber);
// console.log(40 - myNumber);
// console.log(40 * myNumber);
// console.log(40 / myNumber);
// myNumber = myNumber + 1;//любой знак вычисления
// myNumber += 10;//-=,*=,/=
// myNumber++;//увеличить на единицу
// myNumber--;//уменьшить на еденицу
// console.log(myNumber);
// console.log(Math.round(5.45));//округление числа
// console.log(Math.ceil(5.45));//всегда округляет в большую сторону
// console.log(Math.floor(5.8));//всегда округляет в меньшую сторону

// var newNunber = 2.437;
// newNunber.toFixed(1);//в скобках количество знаков после точки
// console.log(newNunber.toFixed(1));

//СТРОКИ
// console.log("40" + myNumber);
// console.log(myString + " Как дела?");
// console.log(myString.toLowerCase());//выводит текст в нижнем регистре
// console.log(myString.toUpperCase());//в верхнем регистре

//МАССИВЫ
// var names = ["Вася","Петя","Женя"];
// console.log(names[2]);
// console.log(names[1].toUpperCase());
// names[0] = "Маша";
// console.log(names[0]);
// names.push("Света");
// console.log(names[3]);
// console.log(names);//покажет все что есть в массиве

//УСЛОВИЯ

//Если условие выполняется то фраза "" отобразится, если нет то нет. Например (10 < 5) не является верным по этому ничего не отбразится
// if (10 > 5) {
// 	console.log("Условие выполнилось");
// } 
//  //меньше или равно
// if (5 <= 5) {
// 	console.log("Условие выполнилось");
// }
//  //проверка на равенство
// if (5 == 5) {
// 	console.log("Условие выполнилось");
// }
//  //строгое не равно
// if (5 === 5) {
// 	console.log("Условие выполнилось");
// }
//  //не равно. В данном случае условие выполнено
// if ("Вася" != "Петя") {
// 	console.log("Условие выполнилось");
// }
//  //строгое не равно, проверяются не только значения но и типы
// if ("Вася" !== "Петя") {
// 	console.log("Условие выполнилось");
// }
//  //&& - логика "и"
// if ("Вася" != "Петя" && myNumber < 20) {
// 	console.log("Условие выполнилось");
// }
// //&& - логика "или". Переменных может быть больше двух
// if ("Вася" != "Петя" || myNumber > 20) {
// 	console.log("Условие выполнилось");
// } 

// if (myNumber < 20) {
// 	console.log("Число меньше 20");
// } else {
// 	console.log("Число больше 20");
// }
// if (myNumber > 20) {
// 	console.log("Число меньше 20");
// } else {
// 	console.log("Число больше 20");
// }

//Цыклы








