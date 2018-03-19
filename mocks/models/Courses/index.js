const faker = require('faker')

function generateCourses(nb) {
  const courses = []
  for (let i = 0; i < nb; i++) {
    courses.push({
      uuid: faker.random.uuid(),
      from: {
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
      },
      to: {
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
      },
      startAt: faker.date.past(),
    })
  }
  return { courses }
}

module.exports = generateCourses