import { ProductType } from '../models/product'

export const mockData: ProductType = {
    id: '1',
    name: 'LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列',
    price: {
        min: 2999,
        max: 3999,
        oriMin: 3699,
        oriMax: 4699
    },
    tags: ['街口結帳享九折優惠', '訂單滿 399 免運費'],
    tips: ['請於訂單備註填寫您需要的球員', '球員搭配支號碼不可替換', '球員款客制訂單出貨需要十四個工作天'],
    images: [
        'images/product.jpg',
        'images/product.jpg',
        'images/product.jpg',
        'images/product.jpg',
        'images/product.jpg'
    ],
    deatails: [
        {
            title: '商品分類',
            value: '球衣 > 聯名 > 新竹街口攻城獅'
        },
        {
            title: '商品描述',
            value: '靈感來自 90 年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。'
        },
        {
            title: '商品備註',
            value: '請於訂單備註填寫您需要的號碼，若末填寫將以空白 球衣寄出，客製化商品不接受退換貨'
        }
    ],
    items: [
        {
            id: '1',
            size: 'S',
            colors: [
                {
                    id: '11',
                    color: '酷炫黑',
                    price: 3199,
                    stock: 10
                },
                {
                    id: '12',
                    color: '紫旋風',
                    price: 2999,
                    stock: 16
                },
                {
                    id: '13',
                    color: '暴風紅',
                    price: 3699,
                    stock: 0
                },
                {
                    id: '14',
                    color: '耀眼黃',
                    price: 2999,
                    stock: 10
                },
                {
                    id: '15',
                    color: '酷炫藍',
                    price: 3999,
                    stock: 5
                }
            ]
        },
        {
            id: '2',
            size: 'M',
            colors: [
                {
                    id: '21',
                    color: '酷炫黑',
                    price: 3199,
                    stock: 0
                },
                {
                    id: '22',
                    color: '紫旋風',
                    price: 2999,
                    stock: 0
                },
                {
                    id: '23',
                    color: '暴風紅',
                    price: 3699,
                    stock: 0
                },
                {
                    id: '24',
                    color: '耀眼黃',
                    price: 2999,
                    stock: 0
                },
                {
                    id: '25',
                    color: '酷炫藍',
                    price: 3999,
                    stock: 0
                }
            ]
        },
        {
            id: '3',
            size: 'L',
            colors: [
                {
                    id: '31',
                    color: '酷炫黑',
                    price: 3199,
                    stock: 5
                },
                {
                    id: '32',
                    color: '紫旋風',
                    price: 2999,
                    stock: 0
                },
                {
                    id: '33',
                    color: '暴風紅',
                    price: 3699,
                    stock: 0
                },
                {
                    id: '34',
                    color: '耀眼黃',
                    price: 2999,
                    stock: 10
                },
                {
                    id: '35',
                    color: '酷炫藍',
                    price: 3999,
                    stock: 11
                }
            ]
        },
        {
            id: '4',
            size: 'XL',
            colors: [
                {
                    id: '41',
                    color: '酷炫黑',
                    price: 3199,
                    stock: 0
                },
                {
                    id: '42',
                    color: '紫旋風',
                    price: 2999,
                    stock: 10
                },
                {
                    id: '43',
                    color: '暴風紅',
                    price: 3699,
                    stock: 2
                },
                {
                    id: '44',
                    color: '耀眼黃',
                    price: 2999,
                    stock: 10
                },
                {
                    id: '45',
                    color: '酷炫藍',
                    price: 3999,
                    stock: 3
                }
            ]
        },
        {
            id: '5',
            size: 'XXL',
            colors: [
                {
                    id: '51',
                    color: '酷炫黑',
                    price: 3199,
                    stock: 8
                },
                {
                    id: '52',
                    color: '紫旋風',
                    price: 2999,
                    stock: 10
                },
                {
                    id: '53',
                    color: '暴風紅',
                    price: 3699,
                    stock: 0
                },
                {
                    id: '54',
                    color: '耀眼黃',
                    price: 2999,
                    stock: 10
                },
                {
                    id: '55',
                    color: '酷炫藍',
                    price: 3999,
                    stock: 9
                }
            ]
        }
    ]
}
