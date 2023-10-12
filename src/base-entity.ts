import { Newable } from './lib/newable'

interface BuildEntityInput<I, E> {
  input: I
  Entity: Newable<E, I>
}

export interface BaseEntityProps {
  readonly id: string
}

export class BaseEntity {
  readonly id: string

  constructor(props: BaseEntityProps) {
    this.id = props.id
  }

  protected static buildEntity<I, E>({
    input,
    Entity,
  }: BuildEntityInput<I, E>): E {
    return new Entity(input)
  }
}
