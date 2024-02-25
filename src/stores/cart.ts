import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import { CartType } from '../models/cart'

type CartStore = {
    cart: CartType[]
    setCart: (cart: CartType[]) => void
    addCart: (cart: CartType) => void
}

export const useCartStore = create<CartStore>()(
    devtools(
        persist(
            (set) => ({
                cart: [],
                setCart: (cart) => set({ cart }),
                addCart: (cart) => set((prev) => ({ ...prev, cart: [...prev.cart, cart] }))
            }),
            {
                name: 'cart',
                storage: createJSONStorage(() => localStorage)
            }
        )
    )
)
