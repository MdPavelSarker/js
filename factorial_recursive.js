//10! = 1*2*3*4*5*6*7*8*9*10
// 0! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 4! = 3!*4
// 5! = (5-1)!*5
// 6! = (6-1)!*6
// n! = (n-1)!*n

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return  n * factorial(n-1);
    }
}

var  result = factorial(4);
console.log(result);




// for(var i = 10; i >= 1 ; i--){
// }

// var i = 10;
// while(i >= 1){
//     i--;
// }





