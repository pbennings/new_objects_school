function School(branch, term, student, subjects) {
  this.branch = branch;
  this.term = term;
  this.student = student;
  this.subjects = subjects;
}

let school = new School
console.log(subjects);

let classroom = new Object();
classroom.class = "code";
classroom.room = 214;
classroom.ac = false;
classroom.heat = true;
classroom.subjects = 'GIT';
console.log(classroom);

let person1 = new School("code immersives", "Term 2", "Paul", 'GIT');

console.log(classroom);
