//TODO: Please write code in this file.
function computeProductsCount(barcodeList) {
    let productsCount = {};
    barcodeList.forEach((barcodeItem) => {
        let dashIndex = barcodeItem.indexOf('-');
        let standardBarcode = barcodeItem.slice(0, dashIndex == -1 ? barcodeItem.length : dashIndex);
        let itemCount = dashIndex == -1 ? 1 : barcodeItem.slice(dashIndex + 1, barcodeItem.length);
        let barcodeCountObj = {};

        if (productsCount.hasOwnProperty(barcodeItem)) {
            barcodeCountObj.count = productsCount[barcodeItem].count + itemCount;
        } else {
            barcodeCountObj.count = parseFloat(itemCount);
        }
        productsCount[standardBarcode] = barcodeCountObj;
    });

    return productsCount
}

function computeProductsPromotion(productsCount, promotionList) {
    let productsPromotion = {};
    const buyTwoGetOneFreePromotion = promotionList.filter(promotionItem => {
        return promotionItem.type === 'BUY_TWO_GET_ONE_FREE';
    });
    const buyTwoGetOneFreeBarcodeList = buyTwoGetOneFreePromotion[0].barcodes;
    buyTwoGetOneFreeBarcodeList.forEach(promotionedBarcode => {
        productsCount[promotionedBarcode].isPromotioned = true;
        const actualProductCount = productsCount[promotionedBarcode].count;
        productsCount[promotionedBarcode].payedCount = actualProductCount >= 2 ? actualProductCount - 1 : actualProductCount;
    });
    return productPromotion;
}

function printInventory(inputs) {
    const promotionList = loadPromotions();
    const productsCount = computeProductsCount(inputs);
    const productPromotion = computeProductsPromotion(productsCount, promotionList);
}
