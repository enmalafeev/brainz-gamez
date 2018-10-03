import readlineSync from 'readline-sync';
import {
  welcome, printMessage, printQuestion, generateRandomNum,
} from '..';

const isEven = num => num % 2 === 0;

const checkIsEven = num => (isEven(num) ? 'yes' : 'no');

const brainEven = () => {
  const AttemptCount = 3;
  welcome();
  printMessage('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  for (let counter = 0; counter < AttemptCount; counter += 1) {
    const minNumber = 1;
    const maxNumber = 100;
    const gameQuestion = generateRandomNum(minNumber, maxNumber);
    printQuestion('Question', gameQuestion);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = checkIsEven(gameQuestion);
    if (answer === rightAnswer) {
      printMessage('Correct!');
    }
    if (answer !== checkIsEven(gameQuestion)) {
      printMessage(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      printMessage(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default brainEven;
