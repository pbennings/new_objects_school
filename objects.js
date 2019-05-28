function School(branch, term, student) {
  this.branch = branch;
  this.term = term;
  this.student = student;
}

let classroom = new Object();
classroom.class = "code";
classroom.room = 214;
classroom.ac = false;
console.log(classroom);

let person1 = new School("code immersives", "Term 2", "Paul");

console.log();
