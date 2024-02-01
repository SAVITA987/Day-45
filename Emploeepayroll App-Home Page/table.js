let employeePayrollList;

window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrollList = getLocalStorage();
    createMainPage();
});

const getLocalStorage = () => {
    employeePayrollLocalStorage = [];
    var keys = Object.keys(localStorage);
    for(let i=0; i<keys.length; i++) {
        var key = keys[i];
        var value = JSON.parse(localStorage.getItem(key));
        employeePayrollLocalStorage.push(value);
    }
    return employeePayrollLocalStorage;
}

const createMainPage = () => {
    const tableHeader = `<tr><th></th><th>Name</th><th>Gender</th><th>Departments</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>`;
    let tableData = ` ${tableHeader} `
    for(const employeePayrollDate of employeePayrollList) {
        tableData = `${tableData}
            <tr>
                <td> <img src="./${employeePayrollDate.profile}" alt=""> </td>
                <td>${employeePayrollDate.name}</td>
                <td>${employeePayrollDate.gender}</td>
                <td>${getDeparmentsHtml(employeePayrollDate.departments)}</td>
                <td> <i class="fa fa-inr" aria-hidden="true"></i> ${employeePayrollDate.salary} </td>
                <td>${employeePayrollDate.startDate}</td>
                <td> <i class="fa fa-trash icon" aria-hidden="true" onclick="onTrashIconClick()"></i>  
                        <i class="fa fa-pencil icon" aria-hidden="true" onclick="onEditIconClick()"></i> 
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = tableData;
}

const getDeparmentsHtml = (departmentList) => {
    let departmentsHtml = '';
    for(const department of departmentList) {
        departmentsHtml = `${departmentsHtml} <div class="dept-label">${department}</div>`
    }
    return departmentsHtml;
}
