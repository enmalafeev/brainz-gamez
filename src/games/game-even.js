import {
  generateRandomNum, startGame,
} from '..';
import { cons } from 'hexlet-pairs';

const isEven = num => num % 2 === 0;

const checkIsEven = num => (isEven(num) ? 'yes' : 'no');

const greeting = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const generateQuestion = () => {
  const gameQuestion = generateRandomNum(minNumber, maxNumber);
  const gameAnswer = checkIsEven(gameQuestion);
  return cons(gameQuestion, gameAnswer);
};

const brainEven = () => {
  startGame(greeting, generateQuestion);
};

export default brainEven;
