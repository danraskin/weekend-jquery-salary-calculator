// COMPLETE ###1 create DOM architecture
// COMPLETE ###2 enable submit employee
//      COMPLETE - prevent incomplete submissions AND alert user
//      COMPLETE - click listener on 'submit' button
//      COMPLETE - add value of employees to employee array
//      COMPLETE - re-render table
//      COMPLETE - clear input fields
// COMPLETE ###3 calculate total salary
//      COMPLETE - const monthly budget = 20000
// COMPLETE ###4 display total salary
// COMPLETE ###5 salary threshold display
//      COMPLETE - display with '$'
// COMPLETE ###6 delete employee
//      COMPLETE - from DOM
//      COMPLETE - from object array

// ## CSS STYLING ##
// ###1 CSS Grid archicture
// ###2 Flexbox element
// ###3 Table styles
// ###4 Give table a 5 row structure to start
//  - set <tr> id row_0 - row_4
//  - in displayEmployees(), if-then tree??

$(`document`).ready(onReady);
function onReady () {
    console.log('JQ'); //all's good in JQ
    $( '#btn_submit' ).on( 'click', addEmployee); // click listener on submit button
    $( '#table_body' ).on( 'click', '[id*=row_]', deleteEmployee); //click listener on table body, targets clicked button
}

const monthlyBudget = 20000; //monthly budget maximum

employeeList = [];

function addEmployee() { //adds new employee to employee array. won't accept blank fields OR incorrect salary amounts.
    if ( $( '#input_firstName' ).val() === '' || $( '#input_lastName' ).val() === '' || $( '#input_employeeID' ).val() === '' || $( '#input_title' ).val() === '' || $( '#input_salary' ).val() === '') {
        alert('Please complete employee submission');
        return false;
    } else if (isNaN( Number($("#input_salary").val())) === true) { //wow this syntax took a while to perfect.
        $( "#input_salary" ).val('');
        alert('Please enter correct salary amount');
        return false;
    } else {
        employeeList.push(
        //grabs key values from inputs
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
        return true;
    }
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