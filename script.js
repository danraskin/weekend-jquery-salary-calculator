// The application should have an input form that collects _employee first name, 
// last name, ID number, job title, annual salary_.

// A 'Submit' button should collect the form information,

// store the information to calculate monthly costs, append information to the DOM and clear the input fields. 
// Using the stored information, calculate monthly costs and append this to the to DOM. 
// If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. 
// For Base mode, it does **not** need to remove that Employee's salary from the reported total.

//create array of employee objects

$(`document`).ready(onReady);
function onReady () {
    console.log('JQ');
    addMembers();
}

membersOfDeath = [
    {
        firstName: 'Chuck',
        lastName: 'Schuldiner',
        employeeID: 00001,
        title: 'Band Lead',
        salary: 60000
    },
    {
        firstName: 'Terry',
        lastName: 'Butler',
        ID: 00011,
        title: 'Bass',
        salary: 40000
    },
    {
        firstName: 'Gene',
        lastName: 'Hoglan',
        ID: 00111,
        title: 'Drums',
        salary: 45000
    }
]

//render band members to table
function addMembers () {
    for (let member of membersOfDeath) {
        console.log(member.firstName);
        
        $( '#tableBody' ).append(`
        <tr>
            <td>${member.firstName}</td>
            <td>dog</td>
            <td>${member.employeeID}</td>
            <td>${member.title}</td>
            <td>${member.salary}</td>
        </tr>
        `);
    }
}