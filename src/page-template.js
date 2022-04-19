module.exports = (employeeArr) => {
  const { name, id, email, role, officeNumber } = employeeArr.manager;

  // employeeArr.engineer.forEach((engineer) => {
  //   console.log(engineer.name);
  // });

  // employeeArr.intern.forEach((intern) => {
  // });

  return `
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../dist/styles.css" />
    <title>Team Profiles</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      <div id="team-container">
        <div id="employee-card">
          <div id="head-container">
            <div id="card-head">
              <h3>${name}</h3>
              <div id="role">
                <img
                  src="../129-1293351_coffee-cup-icon-coffee-cup-icon-white.png"
                  alt="Icon of a coffee cup"
                />
                <h4>${role}</h4>
              </div>
            </div>
          </div>
          <div id="card-body">
            <div id="body-container">
              <p id="ID">ID: ${id}</p>
              <hr />
              <p id="body-email">Email: ${email}</p>
              <hr />
              <p id="body-info">Office Number: ${officeNumber}</p>
            </div>
          </div>
        </div>


        ${employeeArr.engineer.map((engineer) => {
          return `<div id="employee-card">
          <div id="head-container">
            <div id="card-head">
              <h3>${engineer.name}</h3>
              <div id="role">
                <img
                  src="../129-1293351_coffee-cup-icon-coffee-cup-icon-white.png"
                  alt=""
                />
                <h4>${engineer.role}</h4>
              </div>
            </div>
          </div>
          <div id="card-body">
            <div id="body-container">
              <p id="ID">ID: ${engineer.id}</p>
              <hr />
              <p id="body-email">Email: ${engineer.email}</p>
              <hr />
              <p id="body-info">Github: ${engineer.github}</p>
            </div>
          </div>
        </div>`;
        })} 

        ${employeeArr.intern.map((intern) => {
          return `<div id="employee-card">
          <div id="head-container">
            <div id="card-head">
              <h3>${intern.name}</h3>
              <div id="role">
                <img
                  src="../129-1293351_coffee-cup-icon-coffee-cup-icon-white.png"
                  alt=""
                />
                <h4>${intern.role}</h4>
              </div>
            </div>
          </div>
          <div id="card-body">
            <div id="body-container">
              <p id="ID">ID: ${intern.id}</p>
              <hr />
              <p id="body-email">Email: ${intern.email}</p>
              <hr />
              <p id="body-info">School: ${intern.school}</p>
            </div>
          </div>
        </div>`;
        })} 
      </div>
    </main>
  </body>
</html>
  `;
};
