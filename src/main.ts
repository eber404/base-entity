import { faker } from '@faker-js/faker'

import { User } from './user'

const user = User.create({
  name: faker.person.fullName(),
  birthday: faker.date.birthdate(),
  email: faker.internet.email(),
})

console.log('user', { ...user, age: user.age })
