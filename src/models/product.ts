import { z } from 'zod'

const productPriceSchma = z.object({
    min: z.number(),
    max: z.number(),
    oriMin: z.number(),
    oriMax: z.number()
})
export type ProductPriceType = z.infer<typeof productPriceSchma>

// 商品詳細資訊
const productDetailSchema = z.object({
    title: z.string(),
    value: z.string()
})
export type ProductDetailType = z.infer<typeof productDetailSchema>

// 顏色數量
const productColorSchema = z.object({
    id: z.string(),
    color: z.string(),
    price: z.number(),
    stock: z.number()
})
export type ProductColorType = z.infer<typeof productColorSchema>

// 尺寸
export const sizeSchma = z.enum(['S', 'M', 'L', 'XL', 'XXL'])
export type SizeType = z.infer<typeof sizeSchma>

// 商品
const productItemSchema = z.object({
    id: z.string(),
    size: sizeSchma,
    colors: z.array(productColorSchema)
})
export type ProductItemType = z.infer<typeof productItemSchema>

// 商品資訊
export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: productPriceSchma,
    tags: z.array(z.string()),
    tips: z.array(z.string()),
    images: z.array(z.string()),
    deatails: z.array(productDetailSchema),
    items: z.array(productItemSchema)
})
export type ProductType = z.infer<typeof productSchema>
