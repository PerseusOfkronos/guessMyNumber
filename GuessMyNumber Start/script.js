 'use strict';
 let number = Math.floor(Math.random() * 20) + 1;
 let score = 20;
 let highScore = 0;

 document.querySelector('.check').addEventListener('click', function() {
   console.log(document.querySelector('.guess').value);

   const guessedNum = Number(document.querySelector('.guess').value);
   console.log(guessedNum, typeof guessedNum);

   if (!guessedNum) {
     document.querySelector('.message').textContent = '⛔No Number Entered';
   } else if (guessedNum === number) {
     document.querySelector('.message').textContent = "🏆 correct Guess";
     document.querySelector('.number').textContent = number;
     document.querySelector('body').style.backgroundColor = '#60B347';
     document.querySelector('.number').style.width = '30rem';

     if(score > highScore){
       highScore = score;
       document.querySelector('.highscore').textContent = highScore;
     }
   } else if (guessedNum > number) {
     if (score > 1) {
       document.querySelector('.message').textContent = 'guess too High try again';
       score--;
       document.querySelector('.score').textContent = score;
     } else {
       document.querySelector('.message').textContent = '😔 You lost The game';
       document.querySelector('.score').textContent = 0;
     }
   } else if (guessedNum < number) {
     if (score > 1) {
       document.querySelector('.message').textContent = '😔 guess Too Low';
       score--;
       document.querySelector('.score').textContent = score;
     } else {
       document.querySelector('.message').textContent = '😔 You lost the game';
       document.querySelector('.score').textContent = 0;
     }
   }
 });

 document.querySelector('.again').addEventListener('click', function(){
   score = 20;
   number = Math.floor(Math.random()* 20) + 1;
   document.querySelector('.message').textContent = 'Start Guessing....';
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';

   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
 })
