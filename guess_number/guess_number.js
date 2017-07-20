const readlineSync = require('readline-sync');

const guessNumberObj = {
    randNumStr: (min, max, num) => {
        let arr = [],
            t;

        function fn(i) {
            for (i; i < num; i++) {
                t = parseInt(Math.random() * (max - min + 1) + min);
                for (var k in arr) {
                    if (arr[k] == t) {
                        fn(i);
                        break;
                    }
                }
                arr[i] = t;
            }
        }
        fn(0);
        return arr.join('')
    },
    getInputStr: () => {
        const inputStr = readlineSync.question(`System generate random number is ${systemRandomNumStr}\nPlease input your guessed number: `);
        return inputStr;
    }
}

function guessNumber() {
    const systemRandomNumStr = guessNumberObj.randNumStr(1, 9, 4);
    const inputGuessedNumStr = guessNumberObj.getInputStr();
    let totalCount = 0,
        countA = 0,
        countB = 0;
    for (let index in systemRandomNumStr) {
        if (inputGuessedNumStr.indexOf(systemRandomNumStr[index]) !== -1) {
            totalCount++;
        }

        if (inputGuessedNumStr[index] === systemRandomNumStr[index]) {
            countA++;
        }

        countB = totalCount - countA;
    }
    return `${countA}A${countB}B`;
}
// console.log(guessNumber());

module.exports.guessNumberObj = guessNumberObj;
module.exports.guessNumber = guessNumber;
