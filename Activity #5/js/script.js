const students = [];

// Function to add a student from form inputs
function addStudentFromForm() {
  const firstName = document.getElementById("firstName").value.trim();
  const middleName = document.getElementById("middleName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const address = document.getElementById("address").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!firstName || !lastName) {
    alert("Please enter at least a first and last name.");
    return;
  }

  const newStudent = {
    firstName,
    middleName,
    lastName,
    address,
    phoneNumber,
    email,
  };

  students.push(newStudent);
  updateStudentTable();
  clearForm();
}

// Function to update the table display
function updateStudentTable() {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = ""; // Clear previous entries

  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.firstName}</td>
      <td>${student.middleName}</td>
      <td>${student.lastName}</td>
      <td>${student.address}</td>
      <td>${student.phoneNumber}</td>
      <td>${student.email}</td>
    `;
    tbody.appendChild(row);
  });
}

// Clear form fields after adding
function clearForm() {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
}
