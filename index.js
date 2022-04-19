const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-template');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employeeArr = { manager: '', engineer: [], intern: [] };

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'What is your team managers name?',
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log('You need to enter a name!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter employee ID for the manager:',
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log('You need to enter an ID number!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter email address for the manager:',
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log('You need to enter an email!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office number:',
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log('You need to enter an office number!');
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      const { managerName, managerId, managerEmail, officeNumber } =
        managerData;

      const managerObj = new Manager(
        managerName,
        managerId,
        managerEmail,
        'Manager',
        officeNumber
      );

      employeeArr.manager = managerObj;
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'What is your engineers name?',
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log('You need to enter a name!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'Enter employee ID for the engineer:',
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log('You need to enter an ID number!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter email address for the engineer:',
        validate: (engineerEmailInput) => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log('You need to enter an email!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'githubUser',
        message: 'Enter the engineers github username:',
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log('You need to enter a username!');
            return false;
          }
        },
      },
    ])
    .then((engineerData) => {
      const { engineerName, engineerId, engineerEmail, githubUser } =
        engineerData;

      const engineerObj = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        'Engineer',
        githubUser
      );

      employeeArr.engineer.push(engineerObj);

      nextPrompt();
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'What is your interns name?',
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log('You need to enter a name!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'internId',
        message: 'Enter employee ID for the intern:',
        validate: (internIdInput) => {
          if (internIdInput) {
            return true;
          } else {
            console.log('You need to enter an ID number!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Enter email address for the intern:',
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log('You need to enter an email!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter the interns school:',
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log('You need to enter a school!');
            return false;
          }
        },
      },
    ])
    .then((internData) => {
      const { internName, internId, internEmail, school } = internData;

      const internObj = new Intern(
        internName,
        internId,
        internEmail,
        'Intern',
        school
      );

      employeeArr.intern.push(internObj);

      nextPrompt();
    });
};

// Path prompt - Based on what's chosen here, either new employee or generate the HTML file
const nextPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'nextSteps',
        message: 'Please choose from one of the following:',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building team'],
      },
    ])
    .then((chosenStep) => {
      if (chosenStep.nextSteps == 'Add an Engineer') {
        promptEngineer();
      } else if (chosenStep.nextSteps == 'Add an Intern') {
        promptIntern();
      } else {
        generateWebpage();
      }
    });
};

// Create the class objects for each employee
function generateWebpage() {
  // Then we pass the data into the function that generates the content
  employeeProfiles = generatePage(employeeArr);
  // Afterwards, generate the README file using the above generated content
  fs.writeFile('./dist/index.html', employeeProfiles, (err) => {
    if (err) throw new Error(err);
    // Then alert the user the file has been successfully generated
    console.log(
      'Your HTML has been created! Check out HTML in this directory to see it!'
    );
  });

  // // ------- ------- ------- ------- ------- ------- ------- ------- -------
  // const intern1 = new Intern(
  //   'Carlos',
  //   0,
  //   'csabbah@ryerson.ca',
  //   'Intern', // < If this is blank, use 'Employee' as the default role
  //   'Ryerson'
  // );
  // console.log(intern1);
  // intern1.getName();
  // intern1.getSchool(); // This executes the intern method that simply console logs the school
  // intern1.getRole(); // This executes the intern method that simply console logs the school
  // // ------- ------- ------- ------- ------- ------- ------- ------- -------
  // const engineer1 = new Engineer(
  //   'Niv',
  //   0,
  //   'Niv@hotmail.ca',
  //   'Engineer',
  //   'Nimran'
  // );
  // console.log(engineer1);
  // engineer1.getEmail();
  // engineer1.getGithub();
  // engineer1.getRole();
  // // ------- ------- ------- ------- ------- ------- ------- ------- -------
  // const manager1 = new Manager(
  //   'Grace',
  //   0,
  //   'grace@gmail.ca',
  //   'Manager',
  //   124
  // );
  // manager1.getId();
  // manager1.getOfficeNumber();
  // manager1.getRole();
  // // ------- ------- ------- ------- ------- ------- ------- ------- -------
  // const employee = new Employee();
  // employee.getRole();
}

promptManager().then(nextPrompt);
