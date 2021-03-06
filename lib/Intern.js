const Employee = require('../lib/Employee');
class Intern extends Employee {
  constructor(name, id, email, role, school) {
    // Rather than doing this.name, this.id, etc. for all classes, we can just use the default properties from the
    // Employee class which contains properties that are valid for all other classes
    super(name, id, email);
    // If the role property is empty when declaring new Intern object
    if (role == '') {
      // Have the role == Employee
      this.role = 'Employee';
    } else {
      // Else have it equal whatever was type in the property
      this.role = role;
    }
    // The below property is unique to this class so we'll assign it from here
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  // Override the default role (if a new role is assigned)
  getRole() {
    // If the role is empty (when declaring the new object), use the default parent role
    if (this.role == '') {
      return 'Employee';
    } else {
      // Else return the current role
      return this.role;
    }
  }
}

module.exports = Intern;
