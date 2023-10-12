import { z } from 'zod'

export const emailSchema = z.string().email()
export type Email = z.input<typeof emailSchema>
