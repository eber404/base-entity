import { User } from './user'

const user = User.create({
  id: 'abc',
  name: 'John Doe',
  birthday: new Date('1990-01-01'),
})

console.log('user', user)
console.log('age', user.getAge())