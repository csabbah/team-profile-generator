const Employee = require('../lib/Employee');
class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email, role);
    this.github = github;
  }

  getGithub() {
    console.log(`https://github.com/${this.github}`);
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

module.exports = Engineer;
