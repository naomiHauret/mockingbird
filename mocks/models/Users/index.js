const faker = require('faker')
const roles = require('./roles')
function generateUsers(nb) {
  const users = []

  for (let i = 0; i < nb; i++) {

    // Roles
    let userRoles = []
    let userRolesNumber = faker.random.number({
      min: 1,
      max: roles.length,
    })

    // User with multiple roles
    if (userRolesNumber > 1) {
      let rolesCopy = [].concat(roles)

      for (let j = 0; j < userRolesNumber; j++) {
        // Add role randomly
        let randomRole = faker.random.arrayElement(rolesCopy)
        userRoles.push(randomRole)

        // Remove newly added role from tmp roles array
        let itemToRemove = rolesCopy.indexOf(randomRole)
        if (itemToRemove !== -1) rolesCopy.splice(itemToRemove, 1)
      }
    } else {
      // User with single role
       userRoles.push(faker.random.arrayElement(roles))
    }

    users.push({
      uuid: faker.random.uuid(),
      roles: userRoles,
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
    })
  }

  return { users }
}

module.exports = generateUsers
