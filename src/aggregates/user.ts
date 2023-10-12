import { z } from 'zod'

import { Address, addressSchema } from '@/entities/address'
import { BaseEntity, baseEntitySchema } from '@/entities/base-entity'
import { PropsOnly } from '@/lib/props-only'
import { Email, emailSchema } from '@/value-objects/email'

const userSchema = baseEntitySchema.extend({
  name: z.string().min(3),
  birthday: z.date(),
  email: emailSchema,
  address: addressSchema,
})

type UserIn = z.input<typeof userSchema>
type UserOut = PropsOnly<User>

export class User extends BaseEntity {
  readonly name: string
  readonly birthday: Date
  readonly email: Email
  readonly address: Address

  private constructor(props: UserOut) {
    super(props)
    this.name = props.name
    this.birthday = props.birthday
    this.email = props.email
    this.address = props.address
  }

  static create(input: UserIn) {
    const address = Address.create(input.address)
    const factory = (props: UserOut) => new User({ ...props, address })
    return this.buildEntity<User, UserIn, UserOut>({
      input,
      factory,
      schema: userSchema,
    })
  }

  get age() {
    return new Date().getUTCFullYear() - this.birthday.getUTCFullYear()
  }
}
