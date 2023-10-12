import { z } from 'zod'

import { BaseEntity, baseEntitySchema } from './base-entity'

export const userSchema = baseEntitySchema.extend({
  name: z.string().min(3),
  birthday: z.date(),
})

export type UserIn = z.input<typeof userSchema>
export type UserOut = z.output<typeof userSchema>

export class User extends BaseEntity {
  readonly name: string
  readonly birthday: Date

  private constructor(props: UserOut) {
    super(props)
    this.name = props.name
    this.birthday = props.birthday
  }

  static create(props: UserIn) {
    const factory = (props: UserOut) => new User(props)

    return this.buildEntity<User, UserIn, UserOut>({
      input: props,
      factory,
      schema: userSchema,
    })
  }

  public getAge() {
    return new Date().getUTCFullYear() - this.birthday.getUTCFullYear()
  }
}
