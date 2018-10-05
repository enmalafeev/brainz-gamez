import startGame from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 50;
const sign = ['+', '-', '*'];

const generateRandomSign = () => {
  const numberRand = Math.floor(Math.random() * sign.length);
  return sign[numberRand];
};

const generateQuestion = () => {
  const firstNum = generateRandomNum(minNumber, maxNumber);
  const secondNum = generateRandomNum(minNumber, maxNumber);
  const randomSign = generateRandomSign();
  const question = `${firstNum} ${randomSign} ${secondNum}`;
  let answer;
  switch (randomSign) {
    case '+':
      answer = firstNum + secondNum;
      break;
    case '-':
      answer = firstNum - secondNum;
      break;
    case '*':
      answer = firstNum * secondNum;
      break;
    default:
      console.log('sign not defined');
      break;
  }
  return cons(question, String(answer));
};

export default () => startGame(description, generateQuestion);
