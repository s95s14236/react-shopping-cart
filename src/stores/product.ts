import { create } from 'zustand'
import { ProductType } from '../models/product'

type ProductStore = {
    product: ProductType | null
    setProduct: (product: ProductType | null) => void
}

export const useProductStore = create<ProductStore>((set) => ({
    product: null,
    setProduct: (product) => set({ product })
}))
