//TODO: Please write code in this file.
// pos_v0:
// #1 计算每种商品的小计（5min）
// 输入：
// inputGoodsArray: [{}]
// 输出：
// perGoodsSumArray: [{
// barcode: string,
// sum: number
// }]
// #2 计算所有商品的总计(2min)
// 输入：
// perGoodsSumArray
// 输出:
// total: number
//
// #3 打印小票(5min)
// 输入：
// inputGoodsArray，perGoodsSumArray
// 输出：
// result:String

function printInventory(inputs) {
    let perGoodsSumArr = [];
    let total = 0;
    let resultStr = '';

    for (let i = 0; i < inputs.length; i++) {
        const {
            barcode,
            price,
            count
        } = inputs[i];
        let perGoodsSumEle = {
            'barcode': '',
            'sum': 0
        };

        perGoodsSumEle.barcode = barcode;
        perGoodsSumEle.sum = price * count;

        perGoodsSumArr.push(perGoodsSumEle);

    }

    for (let j = 0; j < perGoodsSumArr.length; j++) {
        total += perGoodsSumArr[j].sum;
    }

    resultStr += '***<没钱赚商店>购物清单***\n';

    for (let k = 0; k < inputs.length; k++) {
        for (let p = 0; p < perGoodsSumArr.length; p++) {
            if (inputs[k].barcode === perGoodsSumArr[p].barcode) {
                resultStr += `名称：${inputs[k].name}，数量：${inputs[k].count}${inputs[k].unit}，单价：${inputs[k].price.toFixed(2)}(元)，小计：${perGoodsSumArr[p].sum.toFixed(2)}(元)\n`;
            }
        }
    }

    resultStr += `----------------------\n总计：${total.toFixed(2)}(元)\n**********************`
    console.log(resultStr);
}
