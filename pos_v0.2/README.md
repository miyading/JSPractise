# POS Project v0.2

POS收银机 版本：v0.2

## 教学目标

1. 学会把基本描述转换成程序；
2. 能够驾驭三个循环；

## 需求描述

商店里进行购物结算时会使用收银机（POS）系统，这台收银机会在结算时根据客户的购物车（Cart）中的商品（Item）进行结算和打印购物清单。

我们需要实现一个名为```printInventory```函数，该函数能够将指定格式的数据作为参数输入，然后在浏览器的控制台中输出结算清单的文本。

输入格式（样例）：

```javascript

[
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
]

function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}

```

清单内容（样例）：

```
***<没钱赚商店>购物清单***
名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)
名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)
名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)
----------------------
总计：23.00(元)
**********************
```

## 作业要求

1. 根据```spec/main-spec.js```中的测试用例，在```src/main.js```文件中编写实现代码并确保测试通过；
2. 请在保证代码可读性的前提下，尽可能用最少的代码行数完成作业；
3. 将清单输出到控制台,使测试通过

## 作业提示


1. 学会遍历查找内容


Tasking:
#0 去重 (5min) 8:06
输入：
barcodeArr
输出：
uniqBarcodeCountArr: [{
  barcode: '',
  count: 5
  }]

#1 计算出每种商品的数量及小计（10min）8：03
输入：
uniqBarcodeCountArr, loadAllItems
输出：
itemsDetailInfoArr: [{
  barcode: 'ITEM000000',
  name: '可口可乐',
  unit: '瓶',
  price: 3.00,
  count: 2，
  sum: 6.00
  }]

#2 计算所有商品的总计(5min)
输入：
itemsDetailInfoArr
输出:
total: number

#3 打印小票(8min)
输入：
itemsDetailInfoArr, total
输出：
result:String
