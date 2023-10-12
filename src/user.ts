import { BaseEntity } from './base-entity'
import { PropsOnly } from './lib/props-only'

export type UserProps = PropsOnly<User>

export class User extends BaseEntity {
  readonly name: string
  readonly birthday: Date

  private constructor(props: UserProps) {
    super(props)
    this.name = props.name
    this.birthday = props.birthday
  }

  static create(props: UserProps) {
    const factory = (props: UserProps) => new User(props)

    return this.buildEntity<User, UserProps>({
      input: props,
      factory,
    })
  }

  public getAge() {
    return new Date().getUTCFullYear() - this.birthday.getUTCFullYear()
  }
}
