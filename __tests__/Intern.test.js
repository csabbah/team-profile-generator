const Intern = require('../lib/Intern.js');

function generateId() {
  return Math.ceil(Math.random(0) * 10000);
}

const intern1 = new Intern(
  'Carlos',
  generateId(),
  'csabbah@ryerson.ca',
  'Intern',
  'Ryerson'
);

const intern2 = new Intern(
  'Carlos',
  generateId(),
  'csabbah@ryerson.ca',
  '',
  'Ryerson'
);

test('Creates intern object', () => {
  expect(intern1.name).toEqual(expect.any(String));
  expect(intern1.id).toEqual(expect.any(Number));
  expect(intern1.email).toEqual(expect.stringContaining('@'));
  expect(intern1.role).toEqual('Intern');
  expect(intern1.school).toEqual(expect.any(String));
});

test('Unique ID generated', () => {
  expect(generateId()).toEqual(expect.any(Number));
});

test('Intern method returns school', () => {
  expect(intern1.getSchool()).toEqual(expect.any(String));
});

test('Intern method returns role', () => {
  expect(intern1.getRole()).toEqual('Intern');
});

test('Returns employee if role property not filled', () => {
  // Test to make sure both the getRole function and regular property return Employee as it should
  expect(intern2.getRole()).toEqual('Employee');
  expect(intern2.role).toEqual('Employee');
});
