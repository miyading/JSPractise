const sinon = require('sinon');
const readlineSync = require('readline-sync');
const guessNumberModule = require('./guess_number');

function shouldGet0A0BWhenInputGuessedNumIsEqualToRandomNum() {
    const systemRandomNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'randNumStr').returns('1234');
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('5678');

    const result = guessNumberModule.guessNumber();
    console.log(result === '0A0B' ? 'shouldGet0A0BWhenInputGuessedNumIsEqualToRandomNum is passed' : 'shouldGet0A0BWhenInputGuessedNumIsEqualToRandomNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet0A1BWhenInputGuessedNumOnlyExsit1WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('2678');

    const result = guessNumberModule.guessNumber();
    console.log(result === '0A1B' ? 'shouldGet0A1BWhenInputGuessedNumOnlyExsit1WrongPositionedNum is passed' : 'shouldGet0A1BWhenInputGuessedNumOnlyExsit1WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet0A2BWhenInputGuessedNumExsit2WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('2358');

    const result = guessNumberModule.guessNumber();
    console.log(result === '0A2B' ? 'shouldGet0A2BWhenInputGuessedNumExsit2WrongPositionedNum is passed' : 'shouldGet0A2BWhenInputGuessedNumExsit2WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet0A3BWhenInputGuessedNumExsit3WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('2348');

    const result = guessNumberModule.guessNumber();
    console.log(result === '0A3B' ? 'shouldGet0A1BWhenInputGuessedNumExsit3WrongPositionedNum is passed' : 'shouldGet0A1BWhenInputGuessedNumExsit3WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet0A4BWhenInputGuessedNumExsit4WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('2341');

    const result = guessNumberModule.guessNumber();
    console.log(result === '0A4B' ? 'shouldGet0A4BWhenInputGuessedNumExsit4WrongPositionedNum is passed' : 'shouldGet0A4BWhenInputGuessedNumExsit4WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet1A0BWhenInputGuessedNumExsit1RightPositionedNum0WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('1789');

    const result = guessNumberModule.guessNumber();
    console.log(result === '1A0B' ? 'shouldGet1A0BWhenInputGuessedNumExsit1RightPositionedNum0WrongPositionedNum is passed' : 'shouldGet1A0BWhenInputGuessedNumExsit1RightPositionedNum0WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet1A1BWhenInputGuessedNumExsit1RightPositionedNum1WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('1378');

    const result = guessNumberModule.guessNumber();
    console.log(result === '1A1B' ? 'shouldGet1A1BWhenInputGuessedNumExsit1RightPositionedNum1WrongPositionedNum is passed' : 'shouldGet1A1BWhenInputGuessedNumExsit1RightPositionedNum1WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet1A2BWhenInputGuessedNumExsit1RightPositionedNum2WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('1346');

    const result = guessNumberModule.guessNumber();
    console.log(result === '1A2B' ? 'shouldGet1A1BWhenInputGuessedNumExsit1RightPositionedNum1WrongPositionedNum is passed' : 'shouldGet1A2BWhenInputGuessedNumExsit1RightPositionedNum2WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet1A3BWhenInputGuessedNumExsit1RightPositionedNum3WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('1342');

    const result = guessNumberModule.guessNumber();
    console.log(result === '1A3B' ? 'shouldGet1A3BWhenInputGuessedNumExsit1RightPositionedNum3WrongPositionedNum is passed' : 'shouldGet1A3BWhenInputGuessedNumExsit1RightPositionedNum3WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet2A0BWhenInputGuessedNumExsit2RightPositionedNum0WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('1267');

    const result = guessNumberModule.guessNumber();
    console.log(result === '2A0B' ? 'shouldGet2A0BWhenInputGuessedNumExsit2RightPositionedNum0WrongPositionedNum is passed' : 'shouldGet2A0BWhenInputGuessedNumExsit2RightPositionedNum0WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet2A1BWhenInputGuessedNumExsit2RightPositionedNum1WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('1246');

    const result = guessNumberModule.guessNumber();
    console.log(result === '2A1B' ? 'shouldGet2A1BWhenInputGuessedNumExsit2RightPositionedNum1WrongPositionedNum is passed' : 'shouldGet2A1BWhenInputGuessedNumExsit2RightPositionedNum1WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet2A2BWhenInputGuessedNumExsit2RightPositionedNum2WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('1243');

    const result = guessNumberModule.guessNumber();
    console.log(result === '2A2B' ? 'shouldGet2A2BWhenInputGuessedNumExsit2RightPositionedNum2WrongPositionedNum is passed' : 'shouldGet2A2BWhenInputGuessedNumExsit2RightPositionedNum2WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet3A0BWhenInputGuessedNumExsit3RightPositionedNum0WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('1236');

    const result = guessNumberModule.guessNumber();
    console.log(result === '3A0B' ? 'shouldGet3A0BWhenInputGuessedNumExsit3RightPositionedNum0WrongPositionedNum is passed' : 'shouldGet3A0BWhenInputGuessedNumExsit3RightPositionedNum0WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

function shouldGet4A0BWhenInputGuessedNumExsit4RightPositionedNum0WrongPositionedNum() {
    const inputGuessedNumStr = sinon.stub(guessNumberModule.guessNumberObj, 'getInputStr').returns('1234');

    const result = guessNumberModule.guessNumber();
    console.log(result === '4A0B' ? 'shouldGet4A0BWhenInputGuessedNumExsit4RightPositionedNum0WrongPositionedNum is passed' : 'shouldGet4A0BWhenInputGuessedNumExsit4RightPositionedNum0WrongPositionedNum is not passed');
    inputGuessedNumStr.restore();
}

shouldGet0A0BWhenInputGuessedNumIsEqualToRandomNum();
shouldGet0A1BWhenInputGuessedNumOnlyExsit1WrongPositionedNum();
shouldGet0A2BWhenInputGuessedNumExsit2WrongPositionedNum();
shouldGet0A3BWhenInputGuessedNumExsit3WrongPositionedNum();
shouldGet0A4BWhenInputGuessedNumExsit4WrongPositionedNum();
shouldGet1A0BWhenInputGuessedNumExsit1RightPositionedNum0WrongPositionedNum();
shouldGet1A1BWhenInputGuessedNumExsit1RightPositionedNum1WrongPositionedNum();
shouldGet1A2BWhenInputGuessedNumExsit1RightPositionedNum2WrongPositionedNum();
shouldGet1A3BWhenInputGuessedNumExsit1RightPositionedNum3WrongPositionedNum();
shouldGet2A0BWhenInputGuessedNumExsit2RightPositionedNum0WrongPositionedNum();
shouldGet2A1BWhenInputGuessedNumExsit2RightPositionedNum1WrongPositionedNum();
shouldGet2A2BWhenInputGuessedNumExsit2RightPositionedNum2WrongPositionedNum();
shouldGet3A0BWhenInputGuessedNumExsit3RightPositionedNum0WrongPositionedNum();
shouldGet4A0BWhenInputGuessedNumExsit4RightPositionedNum0WrongPositionedNum();
