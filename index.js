const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const promptInitial = () => {
  return inquirer.prompt([
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
    {
      type: 'checkbox',
      name: 'nextSteps',
      message: 'Please choose from one of the following:',
      choices: ['Add an Engineer', 'Add an Intern', 'Finish building team'],
    },
  ]);
};

const promptEngineer = () => {
  return inquirer.prompt([
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
    {
      type: 'checkbox',
      name: 'nextSteps',
      message: 'Please choose from one of the following:',
      choices: [
        'Add another Engineer',
        'Add an Intern',
        'Finish building team',
      ],
    },
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([
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
    {
      type: 'checkbox',
      name: 'nextSteps',
      message: 'Please choose from one of the following:',
      choices: [
        'Add an Engineer',
        'Add another Intern',
        'Finish building team',
      ],
    },
  ]);
};

function buildTeamProfile() {
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

promptInitial().then((initialData) => {
  if (initialData.nextSteps == 'Add an Engineer') {
    promptEngineer().then((engineerData) => {
      console.log(engineerData, initialData);
    });
  } else if (initialData.nextSteps == 'Add an Intern') {
    promptIntern().then((internData) => {
      console.log(internData, initialData);
    });
  } else {
    console.log(initialData);
  }
});

// buildTeamProfile();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
