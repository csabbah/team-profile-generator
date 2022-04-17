const Employee = require('../lib/Employee');
class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email, role);
    this.school = school;
  }

  getSchool() {
    return console.log(this.school);
  }

  getRole() {
    // If the role is empty (when declaring the new object), use the default parent role
    if (this.role == '') {
      return console.log('Employee');
    } else {
      // Else return the current role
      return console.log(this.role);
    }
  }
}

module.exports = Intern;
