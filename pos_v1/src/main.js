//TODO: Please write code in this file.
function printInventory(inputs) {
  const allItems = loadAllItems();
  const promotions = loadPromotions();
  let inputsDetail = [];
  let flagCount = {};
  const promotionsBarcodeList = promotions.filter(function(item) {
    return item.type === 'BUY_TWO_GET_ONE_FREE'
  })[0].barcodes;

  inputs.forEach((barcode) => {
    const length = barcode.length;
    const dashIndex = barcode.indexOf("-");
    var isBarcodeHasDash = dashIndex !== -1;
    const endIndex = isBarcodeHasDash ? dashIndex : length;
    const dashCount = isBarcodeHasDash ? parseInt(barcode.substring(dashIndex + 1, length), 10) : 1;
    const standardBarcode = barcode.substring(0, endIndex);

    if (!flagCount[barcode]) {
      inputsDetail.push({barcode: standardBarcode});
      flagCount[standardBarcode] = dashCount;
    } else {
      flagCount[standardBarcode]++;
    }
  });

  inputsDetail.forEach((item) => {
    item.count = flagCount[item.barcode];
    item.isInPromotionList = promotionsBarcodeList.includes(item.barcode);
  });

  let outputs = '***<没钱赚商店>购物清单***\n';
  let total = 0;
  let savedTotal = 0;
  allItems.forEach((item) => {
    inputsDetail.forEach((inputItem) => {
      if(inputItem.barcode === item.barcode) {
        const count = inputItem.count;
        const promotionedCount = inputItem.isInPromotionList ? inputItem.count- 1 : inputItem.count;
        const {name, price, unit} = item;
        const sum = promotionedCount * price;
        total += sum;
        const itemDetail = `名称：${name}，数量：${count}${unit}，单价：${price.toFixed(2)}(元)，小计：${sum.toFixed(2)}(元)\n`;
        outputs += itemDetail;
      }
    })
  });
  outputs += '----------------------\n挥泪赠送商品：\n';

  allItems.forEach((item)=> {
    inputsDetail.forEach((inputItem)=> {
      if(inputItem.isInPromotionList && inputItem.barcode === item.barcode) {
        const {name, price, unit} = item;
        savedTotal += price
        const promotionItemDetail = `名称：${name}，数量：1${unit}\n`;
        outputs += promotionItemDetail;
      }
    });
  });

  outputs +=  `----------------------\n总计：${total.toFixed(2)}(元)\n节省：${savedTotal.toFixed(2)}(元)\n**********************`;

  console.log(outputs);
}