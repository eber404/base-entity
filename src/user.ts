import { z } from 'zod'

import { BaseEntity, baseEntitySchema } from './base-entity'
import { Email, emailSchema } from './email'

const userSchema = baseEntitySchema.extend({
  name: z.string().min(3),
  birthday: z.date(),
  email: emailSchema,
})

type UserIn = z.input<typeof userSchema>
type UserOut = z.output<typeof userSchema>

export class User extends BaseEntity {
  readonly name: string
  readonly birthday: Date
  readonly email: Email

  private constructor(props: UserOut) {
    super(props)
    this.name = props.name
    this.birthday = props.birthday
    this.email = props.email
  }

  static create(props: UserIn) {
    const factory = (props: UserOut) => new User(props)

    return this.buildEntity<User, UserIn, UserOut>({
      input: props,
      factory,
      schema: userSchema,
    })
  }

  public getAge() {}

  get age() {
    return new Date().getUTCFullYear() - this.birthday.getUTCFullYear()
  }
}
