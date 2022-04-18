function generateNum(id) {
  return id + Math.ceil(Math.random(0) * 10000);
}
class Employee {
  constructor(name, id, email, role = 'Employee') {
    // All the properties below will be passed down to the children classes as default properties
    this.name = name;
    this.id = generateNum(id);
    this.email = email;
    this.role = role;
  }

  // All methods below will return the appropriate data for each child class
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
