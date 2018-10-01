import readlineSync from 'readline-sync';

const askUserName = () => {
  let userName = readlineSync.question('May I have your name? ');
  console.log('Hello ' + userName + '!');
};

export default askUserName;