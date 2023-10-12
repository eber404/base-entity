import { z } from 'zod'

import { BaseEntity, baseEntitySchema } from './base-entity'

export const addressSchema = baseEntitySchema.extend({
  street: z.string().min(3),
  number: z.number().min(1),
  apartment: z.string().optional(),
})

export type AddressIn = z.input<typeof addressSchema>
export type AddressOut = z.output<typeof addressSchema>

export class Address extends BaseEntity {
  readonly street: string
  readonly number: number
  readonly apartment?: string

  private constructor(props: AddressOut) {
    super(props)
    this.street = props.street
    this.number = props.number
    this.apartment = props.apartment
  }

  static create(input: AddressIn) {
    const factory = (props: AddressOut) => new Address(props)
    return this.buildEntity<Address, AddressIn, AddressOut>({
      factory,
      input,
      schema: addressSchema,
    })
  }

  get fullAddress() {
    return `${this.number} ${this.street}, ${this.apartment}`
  }
}
