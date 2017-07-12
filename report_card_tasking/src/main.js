// #1 字符串数组转换为对应的Model --5min 10min(4:33)
// 输入：
// inputScoreArray: [[String],…[String]]
// 输出：
// scoreArray: [{
//name: String
//  chinese: String,
//  english: String,
//  math: String,
//  programming: String,
//  average: Number,
//  sum: Number
// }, …]
// #2 计算出全班总平均分 --5min -- 9min(4:42)
// 输入：
// scoreArray
// 输出:
// allAverage: Number
// #3 计算出全班总分中位数 --15min --14min(4:56)
// 输入：
// scoreArray
// 输出：
// mid: Number
// #4 打印成绩单 --5min 10min(5:04)
// 输入：
// scoreArray， allAverage，mid
// 输出:
// result: String

function getViewModel(inputs) {
    let stuScoreDetailArr = [];
    for (let i = 0; i < inputs.length; i++) {
        let stuScoreDetailInfo = {};
        stuScoreDetailInfo.name = inputs[i][0];
        stuScoreDetailInfo.math = inputs[i][3];
        stuScoreDetailInfo.chinese = inputs[i][1];
        stuScoreDetailInfo.english = inputs[i][2];
        stuScoreDetailInfo.programming = inputs[i][4];
        stuScoreDetailInfo.sum = computeScoreTotal(inputs[i]);
        stuScoreDetailInfo.average = stuScoreDetailInfo.sum / (inputs[i].length - 1);
        stuScoreDetailArr.push(stuScoreDetailInfo);
    }
    return stuScoreDetailArr;
}

function computeScoreTotal(inputsScoreArr) {
    let score = 0;
    for (let i = 1; i < inputsScoreArr.length; i++) {
        score += parseFloat(inputsScoreArr[i]);
    }
    return score;
}

function computeClassScoreTotal(stuScoreDetailArr) {
    let totalScore = 0;
    const stuCount = stuScoreDetailArr.length;
    for (let j = 0; j < stuCount; j++) {
        totalScore += stuScoreDetailArr[j].sum;
    }
    return totalScore;
}

function computeClassMid(stuScoreDetailArr) {
    let classMid = 0;
    let stuTotalScoreArr = [];
    const stuCount = stuScoreDetailArr.length;
    for (let p = 0; p < stuCount; p++) {
        stuTotalScoreArr.push(stuScoreDetailArr[p].sum);
    }

    let replace = 0;
    for (let q = 0; q < stuCount; q++) {
        for (let m = q; m < stuCount; m++) {
            if (stuTotalScoreArr[q] > stuTotalScoreArr[m]) {
                replace = stuTotalScoreArr[q];
                stuTotalScoreArr[q] = stuTotalScoreArr[m];
                stuTotalScoreArr[m] = replace;
            }
        }
    }

    let midIndex = Math.floor(stuCount / 2);
    if (stuCount % 2 !== 0) {
        classMid = stuTotalScoreArr[midIndex];
    } else {
        classMid = ((stuTotalScoreArr[midIndex - 1] + stuTotalScoreArr[midIndex]) / 2);
    }

    return classMid;
}

function getResultStr(stuScoreDetailArr, classAverage, classMid) {
    let resultStr = '成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n';
    for (let r = 0; r < stuScoreDetailArr.length; r++) {
        resultStr += `${stuScoreDetailArr[r].name}|${stuScoreDetailArr[r].math}|${stuScoreDetailArr[r].chinese}|${stuScoreDetailArr[r].english}|${stuScoreDetailArr[r].programming}|${stuScoreDetailArr[r].average}|${stuScoreDetailArr[r].sum}\n`
    }
    resultStr += `========================\n全班总平均分：${classAverage}\n全班总分中位数：${classMid}`;
    return resultStr;
}

function printInventory(inputs) {
    const stuScoreDetailArr = getViewModel(inputs);
    const classAverage = (computeClassScoreTotal(stuScoreDetailArr) / stuScoreDetailArr.length).toFixed(2);
    const classMid = computeClassMid(stuScoreDetailArr);
    const resultStr = getResultStr(stuScoreDetailArr, classAverage, classMid);

    console.log(resultStr);
}
