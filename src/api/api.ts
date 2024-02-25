import { productSchema } from '../models/product'

const FETCH_PRODUCT = '/api/v1/product'
const fetchProduct = async (id: string) => {
    const res = await fetch(`${FETCH_PRODUCT}/${id}`)
    const data = await res.json()
    return productSchema.parse(data)
}

export const API = {
    query: {
        product: {
            key: FETCH_PRODUCT,
            fn: fetchProduct
        }
    }
}
