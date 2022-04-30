 var bananaPrice = 25;
 console.log(bananaPrice);



 var seenAfter = 23;
 console.log(typeof seenAfter);



 var name = "Hello Java Script";
 console.log(name);



 var isHot = true;
 var isRich = false;
 console.log(isHot);



 var number1 = 25;
 var number2 = '15.5';

 //number1 ='' + number1;       It's called Emty string. Its convert number to string. Avabe thakle output hobe 2515.5
//  number2 = +number2;         No need to parseFloat when we use + before variable
 number2 = parseInt(number2);
 console.log(number1 + number2);



 var number1 = 0.1;
 var number2 = 0.2;
 var total = number1 + number2;
 total = total.toFixed(1);
 console.log(total);




 var paragraph = "Bangladesh, to the east of India on the BAY of Bengal, is a South Asian country MARKED by lush greenery and MANY waterways. Its Padma ,Meghna and Jamuna RIVERS create fertile plains, and TRAVEL by boat is COMMON."
//  console.log(paragraph.toLowerCase());
console.log(paragraph.split(' '))
// console.log(paragraph.indexOf('Meghna'));




// var x = 25;
// var y = 39;
// var z = x + y ;
// console.log(z);