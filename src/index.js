import readlineSync from 'readline-sync';
import welcome from './welcome';
import askUserName from './askUserName';
import printMessage from './printMessage';

const mainLogic = () => {
  welcome();
  askUserName();
};

const printQuestion = (message, question) => {
  console.log(`${message}: ${question}`);
};

const isEven = num => num % 2 === 0;

const checkIsEven = num => (isEven(num) === true ? 'yes' : 'no');

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const brainEven = (AttemptCount) => {
  welcome();
  printMessage('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  let counter = 0;
  while (counter < AttemptCount) {
    const minNumber = 1;
    const maxNumber = 100;
    const randomNum = generateRandomNum(minNumber, maxNumber);
    printQuestion('Question', randomNum);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = checkIsEven(randomNum);
    if (answer === rightAnswer) {
      printMessage('Correct!');
    }
    if (answer !== checkIsEven(randomNum)) {
      printMessage(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      printMessage(`Let's try again, ${userName}!`);
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${userName}`);
};

export default brainEven;
