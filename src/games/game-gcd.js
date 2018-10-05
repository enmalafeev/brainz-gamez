import startGame from '..';
import {
  generateRandomNum,
} from '../utils';
import {
  cons,
} from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 10;

const gcd = (a, b) => {
  let minNum = 0;
  let maxNum = 0;
  if (a > b) {
    maxNum = a;
    minNum = b;
  }
  maxNum = b;
  minNum = a;
  const acc = [];
  for (let i = 1; i <= minNum; i += 1) {
    if (minNum % i === 0 && maxNum % i === 0) {
      acc.push(i);
    }
  }
  return acc.sort((a, b) => b - a)[0];
};

const generateQuestion = () => {
  const gameNumFirst = generateRandomNum(minNumber, maxNumber);
  const gameNumSecond = generateRandomNum(minNumber, maxNumber);
  const gameQuestion = () => `${gameNumFirst} ${gameNumSecond}`;
  const gameAnswer = () => String(gcd(gameNumFirst, gameNumSecond));
  return cons(gameQuestion(), gameAnswer());
};

const brainGcd = () => {
  startGame(description, generateQuestion);
};

export default brainGcd;
