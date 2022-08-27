// The application should have an input form that collects _employee first name, 
// last name, ID number, job title, annual salary_.

// A 'Submit' button should collect the form information,

// store the information to calculate monthly costs, append information to the DOM and clear the input fields. 
// Using the stored information, calculate monthly costs and append this to the to DOM. 
// If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. 
// For Base mode, it does **not** need to remove that Employee's salary from the reported total.

// COMPLETE ###1 create DOM architecture
// COMPLETE ###2 enable submit employee
//      COMPLETE - click listener on 'submit' button
//      COMPLETE - add value of employees to employee array
//      COMPLETE - re-render table
//      COMPLETE - clear input fields
//      - prevent incomplete submissions AND alert user
// COMPLETE ###3 calculate total salary
//      - const monthly budget = 20000
//
// COMPLETE ###4 display total salary
// COMPLETE ###5 salary threshold display
//      COMPLETE - display with '$'
//      ###6 delete employee
//          -- from DOM
//           capture index from td id and use that to delete employee from employeeList

$(`document`).ready(onReady);
function onReady () {
    console.log('JQ'); //all's good in JQ
    $( '#btn_submit' ).on( 'click', addEmployee); // click listener on submit button
    $( '#table_body' ).on( 'click', '[id*=row_]', deleteEmployee); //click listener on table body, targets clicked button
}

const monthlyBudget = 20000; //monthly budget maximum

employeeList = [ //create array of employee objects to start
    // TEST ARRAY with band members of Death 
    //{
    //     firstName: 'Chuck',
    //     lastName: 'Schuldiner',
    //     employeeID: '00001',
    //     title: 'Band Lead',
    //     salary: 12
    // },
    // {
    //     firstName: 'Terry',
    //     lastName: 'Butler',
    //     employeeID: '00011',
    //     title: 'Bass',
    //     salary: 12
    // },
    // {
    //     firstName: 'Gene',
    //     lastName: 'Hoglan',
    //     employeeID: '00111',
    //     title: 'Drums',
    //     salary: 12
    // }
]

function addEmployee() { //adds new employee to employee array
    employeeList.push(
//assigns key values from inputs
        { 
            firstName: $( '#input_firstName' ).val(),
            lastName: $( '#input_lastName' ).val(),
            employeeID: $( '#input_employeeID' ).val(),
            title: $( '#input_title' ).val(),
            salary: $( '#input_salary' ).val(),
        }
    );
    $( 'input' ).val(''); //clears inputs
    displayEmployees();
    monthlyCost();
}

function displayEmployees () { //renders employee list to table
//clears table body 
    $( '#table_body' ).empty();
    for (let i = 0; i < employeeList.length; i++) { //loops employee array, appends each employee to table table AND assigns row ID based on employee index position
        $( '#table_body' ).append(`
        <tr id="row_${i}">>
            <td>${employeeList[i].firstName}</td>
            <td>${employeeList[i].lastName}</td>
            <td>${employeeList[i].employeeID}</td>
            <td>${employeeList[i].title}</td>
            <td>${employeeList[i].salary}</td>
            <td><button id="btn_delete_employee">delete</button></td>
        </tr>
        `);
    }
}

function deleteEmployee() {

    employeeIndex = ($(this).attr('id').split('_')[1]); //grabs index value from <tr> id
    $(this).remove();
    if(employeeIndex === employeeIndex.length-1){ //removes employee object from array based on index position
        employeeList.pop();
    } else {
        employeeList.splice(employeeIndex,1);
    }
    displayEmployees();
    monthlyCost();
    // console.log(employeeIndex);
    // console.log(employeeList);
}



function monthlyCost () {
    let costPerMonth = 0;
    for (let employee of employeeList) {
        costPerMonth += employee.salary/12;
    }
    if (costPerMonth > monthlyBudget) { //compares costs to budge and changes amountchanges background 
        $( '#total_salary' ).css('background-color','red'); 
    } else {
        $( '#total_salary' ).css('background-color','white')
    }
    $( '#total_salary' ).empty();
    $( '#total_salary').append(`Total Monthly: $${Math.round(costPerMonth)}`);

}