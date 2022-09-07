const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = 8000

app.listen(port, () => console.log(`Locked and loaded on port ${port}`))

const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid()
  }
  return newUser
}

const createCompany = () => {

  const newCompany = {
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
  return newCompany
}

// /api/users/new
// /api/companies/new

app.get('/api', (req, res) => {
  res.send('<h1>Faker at your service</h1>')
})

app.get('/api/users/new', (req, res) => {
  let user = createUser()
  res.json(user)
})

app.get('/api/companies/new', (req, res) => {
  let company = createCompany()
  res.json(company)
})

app.get('/api/user/company', (req, res) => {
  let user = createUser()
  let company = createCompany()
  let both = {...user, ...company}
  res.json(both)
})