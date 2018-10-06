import startGame from '..';
import generateRandomNum from '../utils';
import {
  cons,
} from 'hexlet-pairs';

const description = 'What number is missing in this progression?';
const minNumber = 1;
const maxNumber = 10;
const hiddenNum = 3;

const generateProgression = (start, step, length) => {
  let progression = '';
  for (let i = start; i <= length; i += step) {
    if (i === (start + (step * hiddenNum))) {
      progression += '.. ';
    } else {
      progression += `${i} `;
    }
  }
  return progression;
};

const generateQuestion = () => {
  const start = generateRandomNum(minNumber, maxNumber);
  const step = generateRandomNum(minNumber, maxNumber);
  const length = step * 10;
  const question = generateProgression(start, step, length);
  const answer = String(start + (step * hiddenNum));
  return cons(question, answer);
};

export default () => startGame(description, generateQuestion);
