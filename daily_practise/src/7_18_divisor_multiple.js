//12:57-1:10
//24 9 -> 3 72
function maxDivisor(num1, num2) {
    const smallerNum = num1 < num2 ? num1 : num2;
    const biggerNum = num1 > num2 ? num1 : num2;
    let max_divisor = 1;
    for (let num = smallerNum; num >= 1; num--) {
        if (biggerNum % num == 0 && smallerNum % num == 0) {
            max_divisor = num;
            break;
        }
    }
    return max_divisor;
}

function maxDivisor2(num1, num2) {
    while (num1 !== num2) {
        if (num1 > num2) num1 = num1 - num2;
        else num2 = num2 - num1;
    }
    return num1;
}

function minMultiple(num1, num2) {
    const max_divisor = maxDivisor(num1, num2);
    const min_multiple = num1 * num2 / max_divisor;
    return min_multiple;
}

console.log(`最大公约数： ${maxDivisor2(24, 16)}`);
console.log(`最小公倍数；${minMultiple(24, 16)}`);
