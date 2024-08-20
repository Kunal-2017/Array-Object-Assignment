// Que4 Assignment: Building a Student Management System
// Description:
// You are tasked with building a student management system using JavaScript. The system should allow you to
// perform various operations on a list of students, including adding, updating, deleting, and displaying student
// information.
// Requirements:
// Here is an initial array of students. Each student is represented as an object with the following properties: id,
// firstName, lastName, age, and grade.

// Implement the following functions using pure JavaScript (without any external libraries or frameworks):
// a. Add a Student: Create a function to add a new student to the array.
// b. Update Student Information: Create a function to update a student's information based on their id.
// c. Delete a Student: Create a function to delete a student based on their id.
// d. List All Students: Create a function to display a list of all students.
// e. Find Students by Grade: Create a function to find all students who have a specific grade.
// f. Calculate Average Age: Create a function to calculate the average age of all students using array method.

// Sol:
// Initial array of students
// Initial array of students
const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
  // Additional students can be added here
];

// a. Add a Student
function addStudent(id, firstName, lastName, age, grade) {
  students.push({ id, firstName, lastName, age, grade });
  console.log(`Student ${firstName} ${lastName} added.`);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
  const student = students.find((student) => student.id === id);
  if (student) {
    Object.assign(student, updatedInfo);
    console.log(`Student ID: ${id} updated.`);
  } else {
    console.log(`Student ID: ${id} not found.`);
  }
}

// c. Delete a Student
function deleteStudent(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    const removedStudent = students.splice(index, 1);
    console.log(
      `Student ID: ${id} (${removedStudent[0].firstName} ${removedStudent[0].lastName}) removed.`
    );
  } else {
    console.log(`Student ID: ${id} not found.`);
  }
}

// d. List All Students
function listAllStudents() {
  console.log("Student List:");
  students.forEach((student) => {
    console.log(
      `ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`
    );
  });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
  const studentsInGrade = students.filter((student) => student.grade === grade);
  if (studentsInGrade.length > 0) {
    console.log(`Students with Grade ${grade}:`);
    studentsInGrade.forEach((student) => {
      console.log(
        `ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`
      );
    });
  } else {
    console.log(`No students found with Grade ${grade}.`);
  }
}

// f. Calculate Average Age
function calculateAverageAge() {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  const averageAge = totalAge / students.length;
  console.log(`Average Age of Students: ${averageAge.toFixed(2)}`);
}

// Example usage:

// List all students initially
listAllStudents();

// Add a new student
addStudent(4, "Alice", "Walker", 21, "B");

// Update an existing student
updateStudent(2, { firstName: "Janet", grade: "A" });

// Delete a student
deleteStudent(1);

// List all students after changes
listAllStudents();

// Find students with grade 'A'
findStudentsByGrade("A");

// Calculate the average age of students
calculateAverageAge();
