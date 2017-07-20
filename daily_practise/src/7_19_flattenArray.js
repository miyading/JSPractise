//1:50
function flattenArray(inputArr, isShadowFlatten) {
    let resultStr = '';
    if (Array.isArray(inputArr)) {
        resultStr = inputArr.reduce((acc, value) => {
            return acc.concat(flattenArray(value, isShadowFlatten));
        }, '');
    } else {
        return inputArr + ', ';
    }
    return resultStr;
}

console.log('[' + flattenArray([1, [2, 3],
    [
        [4]
    ]
]) + ']');
