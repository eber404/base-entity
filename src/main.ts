import { faker } from '@faker-js/faker'

import { User } from './aggregates/user'

const user = User.create({
  name: faker.person.fullName(),
  birthday: faker.date.birthdate(),
  email: faker.internet.email(),
  address: {
    number: +faker.location.buildingNumber(),
    street: faker.location.street(),
    apartment: `apartment #${faker.number.int({ min: 100, max: 800 })}`,
  },
})

console.log('user', {
  ...user,
  age: user.age,
  fullAddress: user.address.fullAddress,
})
