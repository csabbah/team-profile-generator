const Employee = require('../lib/Employee');
class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return console.log(this.officeNumber);
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

module.exports = Manager;
