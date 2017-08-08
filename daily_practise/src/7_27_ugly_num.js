const commonFactors = [1, 2, 3, 5];

function getMinFactor(num) {
  for(let i = 2; i <= num; i++) {
    if(num % i == 0) {
      return i;
    }
  }
}

function getFactors(num) {
  let factors = [];
  const minFactor = getMinFactor(num);
  factors.push(minFactor);
  let leftNum = num / minFactor;
  let factor = 1;

  while(leftNum > minFactor) {
    factor = getMinFactor(leftNum);
    if(factors.indexOf(factor) == -1) {
      factors.push(factor);
    }
    leftNum = leftNum / factor;
  }

  if(factors.indexOf(factor) == -1) {
    factors.push(leftNum);
  }
  return factors;
}

function isUglyNum(num) {
  const factors = getFactors(num);
  const isUglyNum = factors.every(factor => {
    return commonFactors.includes(factor);
  });
  return isUglyNum;
}

function getNUglyNum(n) {
  let index = 1;
  let factors = [1];
  let num = 2;
  let uglyNum = 2;
  while(index < n) {
    if(isUglyNum(num)) {
        uglyNum = num;
        num ++;
        factors[index++] = uglyNum;
    } else {
      num++;
    }
  }
  return factors[n-1];
}

console.log(isUglyNum(8));
console.log(isUglyNum(14));
console.log(getNUglyNum(9));
