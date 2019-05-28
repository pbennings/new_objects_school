function Student(branch, term, student, subjects) {
  this.branch = branch;
  this.term = term;
  this.student = student;
  this.subjects = subjects;
}

let person1 = new Student("code immersives", "Term 2", "Paul", "GIT");
let person2 = new Student("code immersives", "term 1", "James", "CSS");
console.log(person1, person2);

// let classroom = new Object();
// classroom.class = "code";
// classroom.room = 214;
// classroom.ac = false;
// classroom.heat = true;
// classroom.subjects = "GIT";
// classroom.student1 = person1;
// classroom.student2 = person2;
// console.log(classroom);
