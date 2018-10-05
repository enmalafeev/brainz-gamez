import startGame from '..';
import generateRandomNum from '../utils';
import {
  cons,
} from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 10;

const gcd = (a, b) => {
  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);
  const acc = [];
  for (let i = 1; i <= minNum; i += 1) {
    if (minNum % i === 0 && maxNum % i === 0) {
      acc.push(i);
    }
  }
  return acc.sort((x, y) => y - x)[0];
};

const generateQuestion = () => {
  const firstNum = generateRandomNum(minNumber, maxNumber);
  const secondNum = generateRandomNum(minNumber, maxNumber);
  const question = () => `${firstNum} ${secondNum}`;
  const answer = () => String(gcd(firstNum, secondNum));
  return cons(question(), answer());
};

export default () => startGame(description, generateQuestion);
