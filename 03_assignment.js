// 3. Object Extensibility and Sealing
// a) Use the Object.preventEatensions method to prevent any further additions of properties to the student object.
// b) Use the Object.isEatensible method to check if the student object is extensible. Store the result in a variable
// called eatensibleStatus.
// c) Create a new object calle" teacher with a 'subject' property set to 'Math'.
// d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
// sealedStatus.
// f) Print the eatensibleStatus and sealedStatus to the console.

// Sol:

// 3(a) Create a student object and prevent extensions
const student = {
    name: 'John Doe',
    age: 21,
    grade: 'A'
  };
  
  // Prevent any further additions of properties to the student object
  Object.preventExtensions(student);
  
  // 3(b) Check if the student object is extensible
  const extensibleStatus = Object.isExtensible(student);
  
  // 3(c) Create a new object called teacher with a 'subject' property set to 'Math'
  const teacher = {
    subject: 'Math'
  };
  
  // 3(d) Seal the teacher object, preventing any additions or deletions of properties
  Object.seal(teacher);
  
  // 3(e) Check if the teacher object is sealed
  const sealedStatus = Object.isSealed(teacher);
  
  // 3(f) Print the extensibleStatus and sealedStatus to the console
  console.log('Is the student object extensible?', extensibleStatus);  // false
  console.log('Is the teacher object sealed?', sealedStatus);          // true
  