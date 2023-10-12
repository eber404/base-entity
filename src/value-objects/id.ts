import { createId } from '@paralleldrive/cuid2'
import { z } from 'zod'

export const idSchema = z
  .string()
  .cuid2()
  .optional()
  .transform((v) => (v ? v : createId()))
export type Id = z.output<typeof idSchema>
