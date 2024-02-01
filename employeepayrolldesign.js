function onSubmitClick() {
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var notes = document.getElementById("notes").value;
    
    var profile = document.querySelector('input[name="profile"]:checked').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    var departments = [];
    var departmentCheckboxes = document.querySelectorAll('input[name="department"]:checked');
    departmentCheckboxes.forEach(department => departments.push(department.value));

    var userDetails = {
        name: name,
        profile: profile,
        gender: gender,
        departments: departments,
        salary: salary,
        startDate: `${day} ${month} ${year}`,
        notes: notes
    }

    localStorage.setItem(name, JSON.stringify(userDetails));
    alert("Record Saved Successfully!");
    window.location.href = "submit.html";
}

function loadDate() {
    var name = document.getElementById("name").value;
    var userDetails = localStorage.getItem(name);
    var userDetails = JSON.parse(userDetails);

    var profiles = document.querySelectorAll('input[name="profile"]');
    profiles.forEach(profile => {
        if(profile.value == userDetails.profile) {
            profile.checked = true;
        }
    })

    var genders = document.querySelectorAll('input[name="gender"]');
    genders.forEach(gender => {
        if(gender.value == userDetails.gender) {
            gender.checked = true;
        }
    })

    var departments = document.querySelectorAll('input[name="department"]');
    departments.forEach(department => {
        if(userDetails.departments.includes(department.value)) {
            department.checked = true;
        }
    })

    document.getElementById("name").value = userDetails.name;
    document.getElementById("salary").value = userDetails.salary;
    var date = userDetails.startDate.split(' ');
    document.getElementById("day").value = date[0];
    document.getElementById("month").value = date[1];
    document.getElementById("year").value = date[2];
    document.getElementById("notes").value = userDetails.notes;
}

function onResetClick() {
    document.getElementById("name").value = '';
    document.getElementById("salary").value = '';
    document.getElementById("day").value = '';
    document.getElementById("month").value = '';
    document.getElementById("year").value = '';
    document.getElementById("notes").value = '';
}