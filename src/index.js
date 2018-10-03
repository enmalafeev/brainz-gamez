import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

const printMessage = (message) => {
  console.log(message);
};

const mainLogic = () => {
  welcome();
  askUserName();
};

const printQuestion = (message, question) => {
  console.log(`${message}: ${question}`);
};

const isEven = num => num % 2 === 0;

const checkIsEven = num => (isEven(num) ? 'yes' : 'no');

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const brainEven = (AttemptCount) => {
  welcome();
  printMessage('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  for (let counter = 0; counter < AttemptCount; counter += 1) {
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
  }
  console.log(`Congratulations, ${userName}`);
};

export { mainLogic, brainEven };
