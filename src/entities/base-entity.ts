import { z, ZodSchema } from 'zod'

import { idSchema } from '@/value-objects/id'

export const baseEntitySchema = z.object({
  id: idSchema,
})

type baseEntityOut = z.output<typeof baseEntitySchema>

interface BuildEntityInput<T, In, Out> {
  input: In
  factory: (props: Out) => T
  schema: ZodSchema
}

export class BaseEntity {
  readonly id: string

  constructor(props: baseEntityOut) {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected static create(_props: unknown): unknown {
    throw Error('Method not implemented.')
  }
}
