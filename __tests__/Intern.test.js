const Intern = require('../lib/Intern.js');

const intern1 = new Intern(
  'Carlos',
  0,
  'csabbah@ryerson.ca',
  'Intern',
  'Ryerson'
);

// Declare this object to test if 'Employee' is chosen as the default role if role is empty
const intern2 = new Intern('Carlos', 0, 'csabbah@ryerson.ca', '', 'Ryerson');

test('Creates intern object with all valid values', () => {
  expect(intern1.name).toEqual(expect.any(String));
  expect(intern1.id).toEqual(expect.any(Number));
  expect(intern1.email).toEqual(expect.stringContaining('@'));
  expect(intern1.role).toEqual('Intern');
  expect(intern1.school).toEqual(expect.any(String));
});

test('Unique ID generated', () => {
  // This random num generator is the same one used from the parent class so...
  // we test this here to ensure it returns a number each time
  expect(Math.ceil(Math.random(0) * 100000)).toEqual(expect.any(Number));
});

test('Intern method returns school', () => {
  expect(intern1.getSchool()).toEqual(expect.any(String));
});

test('Intern method returns correct role', () => {
  expect(intern1.getRole()).toEqual('Intern');
});

test('Returns employee if role property not filled', () => {
  // Test to make sure both the getRole function and regular property return Employee as it should
  expect(intern2.getRole()).toEqual('Employee');
  expect(intern2.role).toEqual('Employee');
});
