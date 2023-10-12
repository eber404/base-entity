import { BaseEntity, BaseEntityProps } from './base-entity'

interface UserProps extends BaseEntityProps {
  readonly name: string
  readonly birthday: Date
}

export class User extends BaseEntity {
  readonly name: string
  readonly birthday: Date

  private constructor(props: UserProps) {
    super(props)
    this.name = props.name
    this.birthday = props.birthday
  }

  static create(props: UserProps) {
    return this.buildEntity<UserProps, User>({ input: props, Entity: User })
  }

  public getAge() {
    return new Date().getUTCFullYear() - this.birthday.getUTCFullYear()
  }
}
