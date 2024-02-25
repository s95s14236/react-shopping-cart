import { z } from 'zod'

export const optionSchema = z.object({
    type: z.string(),
    checked: z.boolean(),
    value: z.string()
})
export type OptionType = z.infer<typeof optionSchema>
