import startGame from '..';
import {
  generateRandomNum, add, sub, mul,
} from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 100;
const sign = ['+', '-', '*'];

const generateRandomSign = () => {
  const numberRand = Math.floor(Math.random() * sign.length);
  return sign[numberRand];
};

const generateQuestion = () => {
  const firstNum = generateRandomNum(minNumber, maxNumber);
  const secondNum = generateRandomNum(minNumber, maxNumber);
  const randomSign = generateRandomSign();
  const question = () => `${firstNum} ${randomSign} ${secondNum}`;
  const answer = () => {
    let answer;
    switch (randomSign) {
      case '+':
        answer = add(firstNum, secondNum);
        break;
      case '-':
        answer = sub(firstNum, secondNum);
        break;
      case '*':
        answer = mul(firstNum, secondNum);
        break;
      default:
        console.log('sign not defined');
        break;
    }
    return String(answer);
  };
  return cons(question(), answer());
};

const brainCalc = () => {
  startGame(description, generateQuestion);
};

export default brainCalc;
