import startGame from '..';
import generateRandomNum from '../utils';
import {
  cons,
} from 'hexlet-pairs';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 500;

const isPrime = (num) => {
  let res = 0;
  const sqrtNum = Math.floor(Math.sqrt(num));
  for (let i = 1; i <= sqrtNum; i += 1) {
    if (num % i === 0) {
      res += 1;
    }
  }
  if (res === 1) return true;
  return false;
};

const checkIsPrime = num => (isPrime(num) ? 'yes' : 'no');

const generateQuestion = () => {
  const question = String(generateRandomNum(minNumber, maxNumber));
  const answer = checkIsPrime(question);
  return cons(question, answer);
};

export default () => startGame(description, generateQuestion);
