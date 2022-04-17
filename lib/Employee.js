class Employee {
  constructor(name, id, email, role = 'Employee') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return console.log(this.name);
  }

  getId() {
    return console.log(this.id);
  }

  getEmail() {
    return console.log(this.email);
  }

  getRole() {
    return console.log(this.role);
  }
}

module.exports = Employee;
