import { createId } from '@paralleldrive/cuid2'
import { z, ZodSchema } from 'zod'

import { PropsOnly } from './lib/props-only'

export const baseEntitySchema = z.object({
  id: z
    .string()
    .cuid2()
    .optional()
    .transform((v) => (v ? v : createId())),
})

interface BuildEntityInput<T, In, Out> {
  input: In
  factory: (props: Out) => T
  schema: ZodSchema
}

export type BaseEntityProps = PropsOnly<BaseEntity>

export class BaseEntity {
  readonly id: string

  constructor(props: BaseEntityProps) {
    this.id = props.id
  }

  protected static buildEntity<T, In, Out>({
    input,
    factory,
    schema,
  }: BuildEntityInput<T, In, Out>): T {
    const validation = schema.safeParse(input)
    if (!validation.success) throw new Error(validation.error.message)

    return factory(validation.data)
  }
}
