let selectBtn1 = document.querySelector('#selectEmpBtn1');
selectBtn1.addEventListener('click',()=>{
    selectBtn1.textContent= 'Selected';
    selectBtn1.style.backgroundColor ='#74AED8'
    selectBtn2.textContent='select'
    selectBtn2.style.backgroundColor = '#3896DA'
})
let selectBtn2 = document.querySelector('#selectEmpBtn2');
selectBtn2.addEventListener('click',()=>{
    selectBtn2.textContent= 'Selected';
    selectBtn2.style.backgroundColor ='#74AED8'
    selectBtn1.textContent='select'
    selectBtn1.style.backgroundColor = '#3896DA'
})

function sendEmail(){
    alert('Change request sent to selected employee through Email');
}

function selectAll(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
}

// Array to store selected employees
const selectedEmployees = [];

// Function to update the selected employees array
function updateSelectedEmployees(employeeName) {
    if (!selectedEmployees.includes(employeeName)) {
        selectedEmployees.push(employeeName);
    } else {
        // If already selected, remove from the array
        const index = selectedEmployees.indexOf(employeeName);
        selectedEmployees.splice(index, 1);
    }
}

document.getElementById('selectEmpBtn1').addEventListener('click', () => {
    // Get the employee name from the data attribute
    const employeeName = document.getElementById('selectEmpBtn1').dataset.employeeName;

    // Update the selected employees array
    updateSelectedEmployees(employeeName);

    // Save the selected employee data
    sessionStorage['selectedEmployees'] = JSON.stringify(selectedEmployees);

});

document.getElementById('selectEmpBtn2').addEventListener('click', () => {
    // Get the employee name from the data attribute
    const employeeName = document.getElementById('selectEmpBtn2').dataset.employeeName;

    // Update the selected employees array
    updateSelectedEmployees(employeeName);

    // Save the selected employee data
    sessionStorage['selectedEmployees'] = JSON.stringify(selectedEmployees);

});


// Add this to your existing script in the "List of Employees" page

document.getElementById('sendRequestBtn').addEventListener('click', () => {
    // Get the saved form data from sessionStorage
    const changeId = sessionStorage['changeid'];
    const issueDate = sessionStorage['issueDate'];
    const revision = sessionStorage['revision'];
    const changeDesc = sessionStorage['changeDesc'];
    const selectedEmployees = JSON.parse(sessionStorage['selectedEmployees'] || '[]');

    // Prepare the data for the formspree.io form
    const formData = {
        changeId,
        issueDate,
        revision,
        changeDesc,
        selectedEmployee,
        // Add other form fields as needed
    };

    // Use fetch or any appropriate method to send the data to formspree.io
    fetch('https://formspree.io/f/xgejbpyv', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        // Handle the response (success or error)
        console.log('Email sent successfully!');
        // You may want to redirect the user or provide a success message
    })
    .catch(error => {
        console.error('Error sending email:', error);
        // Handle the error
    });
});
