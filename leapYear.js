 const year = 3689;
 const remainder = year % 4 ;
 if(remainder == 0){
     console.log('Your Entire Year Is a Leap Year');
 }
 else{
     console.log('Your Entire Year Is not a Leap Year');
 }

// function isLeapYear(year){
//     if(( 0 == year % 4 ) && ( 0 != year % 100) || (0 == year % 400)){
//     console.log(year + 'Is a Leap Year');
// }
// else {
//     console.log(year + 'Is not a Leap Year' );
// }
//  } 
// const year = prompt('Enter your year');
// isLeapYear(year);