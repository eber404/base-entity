import { FunctionKeys } from 'utility-types'

export type PropsOnly<T extends object> = Omit<T, FunctionKeys<T>>
