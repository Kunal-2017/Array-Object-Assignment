// Que5 You are given a JavaScript object representing a student's information. Your task is to use the 'for...in' loop
// to iterate over the properties of the object and perform various operations.
// a. Create a function displayStudentInfo that takes the student object as a parameter. Inside this function, use a
// 'for...in' loop to iterate over the properties of the student object and print each property and its corresponding
// value to the console. The output should look something like this:

// Student object
const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true,
};

// Function to display student information using a 'for...in' loop
function displayStudentInfo(student) {
  console.log("Student Information:");

  // Iterate over properties in the student object
  for (const property in student) {
    if (student.hasOwnProperty(property)) {
      console.log(`${property}: ${student[property]}`);
    }
  }

  // Perform additional operations (if needed)
  // Example: Check if student is enrolled and has a high GPA
  if (student.isEnrolled && student.GPA >= 3.5) {
    console.log(`${student.name} is a high-achieving enrolled student.`);
  } else {
    console.log(
      `${student.name} is not meeting high-achieving standards or is not enrolled.`
    );
  }
}

// Call the function to display the student's information
displayStudentInfo(student);
