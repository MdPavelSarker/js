function isPrime(n){
    for( var i = 2; i < n; i++ ){
        if(n % i == 0){
            return 'Not a prime number';
          
        }
    
    }
    return 'Your Entire number is a prime number';
}
var result = isPrime(139);
console.log(result);


// var n = 128;
// for( var i = 2; i < n; i++ ){
//     console.log(i, n % i);
//     if(n%i == 0){
//         console.log('Not a prime number');
//         break;
//     }

// }
// console.log('Your Entire number is a prime number');