interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Brian",
    lastName: "Maleek",
    age: 27,
    location: "Capetown",
};

const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    location: "Nairobi",
};

// Create an array of students named studentsList
const studentsList: Student[] = [student1, student2];

// Create a table using Vanilla JS
const table = document.createElement("table");

// Create table header
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

// Create and style header cells
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
nameHeader.style.border = '1px solid black';
nameHeader.style.padding = '8px';
nameHeader.style.backgroundColor = '#f2f2f2';

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = '1px solid black';
locationHeader.style.padding = '8px';
locationHeader.style.backgroundColor = '#f2f2f2';

// Append headers to header row
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

// Add header to table before tbody
table.appendChild(thead);

// Create table body
const tbody = document.createElement("tbody");

// Add some basic styling
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

// Populate the table with students' data
studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    nameCell.style.border = '1px solid black';
    nameCell.style.padding = '8px';
    row.appendChild(nameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

// Append the table body to the table and the table to the document body
table.appendChild(tbody);
document.body.appendChild(table);

