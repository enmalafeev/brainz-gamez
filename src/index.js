import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attemptCount = 3;

const startGame = (description, question) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  for (let counter = 0; counter < attemptCount; counter += 1) {
    const getGameQuestion = question();
    const gameQuestion = car(getGameQuestion);
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(getGameQuestion);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    }
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default startGame;
