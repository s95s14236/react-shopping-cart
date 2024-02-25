import { z } from 'zod'
import { sizeSchma } from './product'

export const cartSchema = z.object({
    size: sizeSchma,
    color: z.string(),
    count: z.number()
})
export type CartType = z.infer<typeof cartSchema>
