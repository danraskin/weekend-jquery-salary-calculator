# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

# Functionality:

Form inputs employee objects with five keys (first name, last name, employee ID, job title and annual salary) to an array, and displays array in table. Monthly labor costs are outputed (sum: employee.salary/12). If monthly costs exceed budget limit ($20,000), display box turns red. Employees can be removed from object array with 'delete' button. Table and monthly labor cost output displays are updated.

# Challenges:

JQuery library is used for event handling and responsive css/html elements. 
Event handling:
       1) Employee input event is captured by html element <button id="btn_submit">:
            $( '#btn_submit' ).on( 'click', addEmployee)
       2) [addEmployee()]
        IF any input field are left blank OR IF submitted salary is not a number, user is prompted to complete forms properly.
        IF form is correct, inputs are added as new employee objects to employeeList array using html input element ID as jquery selectors.
        Inputs are cleared.
        Table is updated using [displayEmployees()] function .
        Monthly costs are calculated using [monthlyCost()] function.

        3) displayEmployees()
        Table is cleared.
        For-loop loops through employeeList array. For each employee table is appended

        <tr id="row_${i}">>
            <td>${employeeList[i].firstName}</td>
            <td>...
        </tr>

        where i is index position of employee in array.

        4) monthlyCost()
        initializes variable costPerMonth = 0
        loops through employee array. For each employee,
        costPerMonth += employee.salary/12;

        IF/ELSE statement compares costPerMonth to global constant monthlyBudget (monthlyBudget = 20000)
        If cost > budget, html element <td id="total_salary> background set to red using jquery function:
            $( '#total_salary' ).css('background-color','red'); 
        ELSE if cost < budget, element background color set to white.
        element field is emptied and appended to display monthly costs rounded to nearest integer.

        5) Remove employee event is captured by html element <tbody id="table_body> when target child button is clicked:
            $( '#table_body' ).on( 'click', '[id*=row_]', deleteEmployee)
        
        6) deleteEmployee()
        an index variable is derived from html element <tr id="row_i"> where i is employee object index position, as set in displayEmploye().
        target row is removed using
            $(this).remove();
        FOR-OF loop loops through employeeList array. for each employee:
        passes through IF/ELSE statement to remove employee object from array using .pop() and .splice(), based on object index position i.
        table is re-displayed displayEmployees();
        monthly cost is re-displayed monthlyCost();

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
