import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const printMessage = (message) => {
  console.log(message);
};

export const printQuestion = (message, question) => {
  console.log(`${message}: ${question}`);
};

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

export const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
