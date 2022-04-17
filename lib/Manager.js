const Employee = require('../lib/Employee');
class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    // Rather than doing this.name, this.id, etc. for all classes, we can just use the default properties from the
    // Employee class which contains properties that are valid for all other classes
    super(name, id, email, role);
    // However the below property is unique to this class so we'll assign it from here
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return console.log(this.officeNumber);
  }

    // Override the default role (if a new role is assigned)
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

module.exports = Manager;
