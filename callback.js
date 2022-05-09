function exp_callback(name, age, task){
    console.log('Hello', name);
    console.log('Your age', age);
    task();
    // washHand()
    // takaShower();
}

function washHand(){
    console.log('Wash hand with soap')
}

function takaShower(){
    console.log('Take Shower');
}
function scrollFacebook(){
    console.log('He scoll facebook but dont like chat');
}
exp_callback('Hena!', 17, washHand);
exp_callback('Halim!', 11, takaShower);
exp_callback('Pintu', 19 , scrollFacebook);

