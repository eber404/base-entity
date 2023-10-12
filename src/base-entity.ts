import { PropsOnly } from './lib/props-only'

interface BuildEntityInput<Input, T> {
  input: Input
  factory: (props: Input) => T
}

export type BaseEntityProps = PropsOnly<BaseEntity>

export class BaseEntity {
  readonly id: string

  constructor(props: BaseEntityProps) {
    this.id = props.id
  }

  protected static buildEntity<T, I>({
    input,
    factory,
  }: BuildEntityInput<I, T>): T {
    return factory(input)
  }
}
