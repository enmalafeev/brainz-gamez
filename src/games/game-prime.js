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
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      res += 1;
    }
  }
  if (res === 2) return 'yes';
  return 'no';
};

const generateQuestion = () => {
  const question = String(generateRandomNum(minNumber, maxNumber));
  const answer = isPrime(question);
  return cons(question, answer);
};

export default () => startGame(description, generateQuestion);
