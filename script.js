// the following will generate random Number from 1 to 6
const firstRandomNumber = Math.floor(Math.random()*6+1);

//  the following line will give a append nuber as //images/dice4.png will generate upt dice 6
const firstDiceImage = 'asset/dice' + firstRandomNumber + '.png' ;

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

//Logic for user 2

// the following will generate random Number from 1 to 6
const secondRandomNumber = Math.floor(Math.random()*6+1);

//  the following line will give a append nuber as //images/dice4.png will generate upt dice 6
const secondDiceImage = 'asset/dice' + secondRandomNumber + '.png' ;

document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

// logic For winner
if(firstRandomNumber > secondRandomNumber){
document.querySelector('h1').innerHTML='The winner is user 1';
}
else if(secondRandomNumber > firstRandomNumber){
    document.querySelector('h1').innerHTML='The winner is user 2';
}
else{
    document.querySelector('h1').innerHTML="It's a draw";

}