import startGame from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 100;
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const sign = ['+', '-', '*'];

const generateRandomSign = () => {
  const numberRand = Math.floor(Math.random() * sign.length);
  return sign[numberRand];
};

const generateQuestion = () => {
  const gameNumFirst = generateRandomNum(minNumber, maxNumber);
  const gameNumSecond = generateRandomNum(minNumber, maxNumber);
  const gameSign = generateRandomSign();
  const gameQuestion = () => `${gameNumFirst} ${gameSign} ${gameNumSecond}`;
  const gameAnswer = () => {
    let answer;
    switch (gameSign) {
      case '+':
        answer = add(gameNumFirst, gameNumSecond);
        break;
      case '-':
        answer = sub(gameNumFirst, gameNumSecond);
        break;
      case '*':
        answer = mul(gameNumFirst, gameNumSecond);
        break;
      default:
        console.log('sign not defined');
        break;
    }
    return String(answer);
  };
  return cons(gameQuestion(), gameAnswer());
};

const brainCalc = () => {
  startGame(description, generateQuestion);
};

export default brainCalc;
