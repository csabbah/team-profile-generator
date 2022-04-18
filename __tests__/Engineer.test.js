const Engineer = require('../lib/Engineer.js');

const engineer1 = new Engineer(
  'Niv',
  0,
  'Niv@hotmail.ca',
  'Engineer',
  'Nimran'
);

// Declare this object to test if 'Employee' is chosen as the default role if role is empty
const engineer2 = new Engineer('Niv', 0, 'Niv@hotmail.ca', '', 'Nimran');

test('Creates Engineer object with all valid values', () => {
  expect(engineer1.name).toEqual(expect.any(String));
  expect(engineer1.id).toEqual(expect.any(Number));
  expect(engineer1.email).toEqual(expect.stringContaining('@'));
  expect(engineer1.role).toEqual('Engineer');
  expect(engineer1.github).toEqual(expect.any(String));
});

test('Unique ID generated', () => {
  // This random num generator is the same one used from the parent class so...
  // we test this here to ensure it returns a number each time
  expect(Math.ceil(Math.random(0) * 100000)).toEqual(expect.any(Number));
});

test('Engineer method returns github username', () => {
  expect(engineer1.getGithub()).toEqual(expect.any(String));
});

test('Engineer method returns correct role', () => {
  expect(engineer1.getRole()).toEqual('Engineer');
});

test('Returns employee if role property not filled', () => {
  // Test to make sure both the getRole function and regular property return Employee as it should
  expect(engineer2.getRole()).toEqual('Employee');
  expect(engineer2.role).toEqual('Employee');
});
