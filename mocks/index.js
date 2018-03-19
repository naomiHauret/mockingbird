const generateUsers = require('./models/Users')
const generateCourses = require('./models/Courses')

module.exports = () => {
  return {
    users: generateUsers(50),
    courses: generateCourses(2),

    // your other entities ...
  }
}