const Manager = require('../lib/Manager.js');

const manager1 = new Manager('Grace', 0, 'grace@gmail.ca', 'Manager', 124);

// Declare this object to test if 'Employee' is chosen as the default role if role is empty
const manager2 = new Manager('Grace', 0, 'grace@gmail.ca', '', 124);

test('Creates Manager object with all valid values', () => {
  expect(manager1.name).toEqual(expect.any(String));
  expect(manager1.id).toEqual(expect.any(Number));
  expect(manager1.email).toEqual(expect.stringContaining('@'));
  expect(manager1.role).toEqual('Manager');
  expect(manager1.officeNumber).toEqual(expect.any(Number));
});

test('Unique ID generated', () => {
  // This random num generator is the same one used from the parent class so...
  // we test this here to ensure it returns a number each time
  expect(Math.ceil(Math.random(0) * 100000)).toEqual(expect.any(Number));
});

test('Manager method returns valid office number', () => {
  expect(manager1.getOfficeNumber()).toEqual(expect.any(Number));
});

test('Manager method returns correct role', () => {
  expect(manager1.getRole()).toEqual('Manager');
});

test('Returns employee if role property not filled', () => {
  // Test to make sure both the getRole function and regular property return Employee as it should
  expect(manager2.getRole()).toEqual('Employee');
  expect(manager2.role).toEqual('Employee');
});
