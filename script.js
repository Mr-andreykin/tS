// // // for (let i = 0; i < 10; i++) {
// // //     console.log(i);
// // // }

// // // do {
// // //     console.log('12');
// // // } while (false);

// // // while (true) {
// // //     console.log(4);
// // //     break;
// // // }

// // // while (true) {
// // //     const answer = prompt('напишите exit');
// // //     if (answer === 'exit') {
// // //         break; // Прерывает тот цикл, в котором он находится
// // //     }
// // // }


// // // for (let i = 0; i < 10; i++) {
// // //     console.log(i);
// // //     if(i === 4) {
// // //         break;
// // //     }
// // // }


// // // for (let i = 0; i < 10; i++) {
// // //     console.log(i);
// // //     if (i === 4) {
// // //         continue; //Прерывает именно текущую итерацию цикла
// // //     }
// // //     console.log(i)
// // // }

// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         continue; //Прерывает именно текущую итерацию цикла
//     }
//     console.log(i)
// }

// // // let arr = [];
// // // let arr = new Array();
// // // let arr = Array();

// // let arr = [1, null, 4, 'ewewe', 999, ['a', 'b', 'c'], 777];
// // /*Добавляет в конец */
// // arr.push(2);
// // arr.push(3);
// // arr.push(1212);
// // arr[2] = 2;

// // console.log(arr.length) //Длина массива
// // /*Удаляет с конца */
// // // const res = arr.pop();
// // // console.log(res); // Увидеть удаляемый элемент

// // // arr.unshift(333); //добавил вначало
// // // arr.shift(333); //удалил из начала
// // // console.log(arr)

// // console.log(arr[0]); // Обращение к 1-му элементу массива
// // console.log(arr[1]); // Обращение к 2-му элементу массива
// // console.log(arr[2]); // Обращение к 3-му элементу массива

// // console.log(arr[5][2]) // называется многомерный массив

// // let a = 3;
// // let b = 5;
// // b = a;

// // const arr = [1, 2, 3, 4, 5, 6];

// // const res = arr.slice(1, 4); // с первого по 4 без последнего, не включительно
// // // Array.prototype.slice() - можно вызвать в таком виде
// // console.log(res);
// // console.log(arr)


// // const arr = [1, 2, 3, 4, 5, 6];
// // const arr2 = ['a', 'b'];

// // const arr3 = arr.concat(arr2);

// // console.log(arr)
// // console.log(arr2)
// // console.log(arr3)

// // const arr = ['aaa', '222', 'b', 4, 5, 'r2'];
// // for(let i = 0; i < arr.length; i++) {
// //     console.log(i);
// //     console.log(arr[i]);
// // }

// // const arr = [222, 3, 7, 4, 5, 323, 2, 4, 5];
// // let sum = 0;
// // for(let i = 0; i < arr.length; i++) {
// //     console.log(i);
// //     console.log(arr[i]);
// //     sum +=arr[i];
// // }
// // console.log(sum); 

// // const arr = [222, 3, 7, 4, 'RRR', 323, 2, 4, 5];
// // const res = arr.indexOf('RRR');
// // console.log(res);
// // console.log(arr[res]);

// // const str = '10:12:45';
// // const res = str.split(':');
// // console.log(res)
// // const res2 = res.join('-');
// // console.log(res2)

// // const str = '10:12:45 Реаизовать функцию с тремя параметрами';
// // const res = str.split(' ');
// // console.log(res)
// // const resultTextArray = [];

// // for (let i = 0; i < res.length; i++) {
// //     const word = res[i];
// //     if(word.length > 5) {
// //         resultTextArray.push(word);
// //     }
// // }

// // const resultText = resultTextArray.join(' ');
// // console.log(resultText);

// // const str = '10:12:45 Реаизовать функцию с тремя параметрами';
// // const res = str.split(' ');
// // const resultTextArray = res.map(convertToUpperCase);
// // console.log(resultTextArray);

// // function convertToUpperCase(str) {
// //     return str.toUpperCase();
// // }


// // const str = '10:12:45 Реаизовать функцию с тремя параметрами';
// // const res = str.split(' ');

// // // res.map();
// // // res.filter(); // методы
// // // res.forEach();

// // const resultTextArray = res.map(convertToUpperCase);
// // console.log(resultTextArray);

// // function convertToUpperCase(str) {
// //     return str.toUpperCase();
// // }


// const str = '10:12:45 Реаизовать функцию с тремя параметрами';
// const res = str.split(' ');

// // res.map();
// // res.filter(); // методы
// // res.forEach();

// const resultTextArray = res.map(convertToUpperCase);
// console.log(resultTextArray);

// function convertToUpperCase(str) {
//     return str.toUpperCase();
// }

// // function sum(a, b) {
// //     return a + b;
// // }
// // const res = sum(5, 5);
// // console.log(res);

// const sum = (a, b) => {
//     return a + b;
// }
// const res2 = sum(5, 5);
// console.log(res2);


// const arr = ['a', 'b', 'c', 'a22', 'b22'];

// for (let i = 0; i <= arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// arr.forEach((element) => {
//     console.log(element);
// });



// // const arr = ['a', 'b', 'c', 'a22', 'b22'];

// // for (let i = 0; i <= arr.length; i++) {
// //     const element = arr[i];
// //     console.log(element);
// // }



// const arr = [1, 2, 3, 4, 5, 6];

// const res1 = arr.forEach((element) => {
//     console.log(element);
// });
// console.log(res1);





// const res2 = arr.map((element) => {
//     console.log(element);
//     return 'Сумма:' + element;
// });
// console.log(res2);





// const res3 = arr.filter((element) => {
//     console.log(element);
// return (element % 2) === 0;
// });
// console.log(res3);

// const priceList = [];

// const result = priceList.filter(price => price % 2);
// console.log(result);

// for(var x = 0; x < 20; x++){
//     var str = "";
//     for(var y = 0; y <= x; y++){
//     str += "x";
//     }
//     console.log(str);
//     }

 
// var arr = [];
// var end = 0;
// while (end < 20){
//     end++;
//     arr.push('x');
//     console.log(arr);
// }


// const arr = [];

// function isSimple(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 2; i <= 100; i++) {
//     if (isSimple(i)) {
//         arr.push(i);
//     }
// }

// arr.unshift(0, 1);
// console.log(arr);
// arr.splice(21, 0, 'RRR');
// const res = arr.indexOf('RRR');
// console.log(arr)
// console.log(res);
// console.log(arr[res]);
// arr.splice(21, 1, 0);
// console.log(arr)

// const basket = [['Шупка', 1000], ['Куртка', 5000], ['Ботинки', 3000]]; // создал массив товаров в корзине многомерный

// function countBasketPrice(basket) {
//     let sum = 0;
//     for(let i = 0; i < basket.length; i++){
//         sum += basket[i][1];
//     }
//     return sum;
// }

// //Организовать функцию стоимости карзины
// const basket = [['Шапка', 1000], ['Куртка', 5000], ['Ботинки', 3000]];

// function countBasketPrice(basket) {
//     let s = 0;
//     for (i = 0; i < basket.length; i++) {
//         s += basket[i][1];
//     }
//     return s;
// }

// countBasketPrice(basket);


// let str = 'x';

// while (str.length <= 20) {
//     str += 'x';
//     console.log(str);
// }