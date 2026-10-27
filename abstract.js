class Person {
    getDetails() {
        throw new Error("getDetails() must be implemented");
    }

    getRole() {
        throw new Error("getRole() must be implemented");
    } 

    
}
 
 
class Student extends Person {
    constructor(name, studentId, grade) {
        super();
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Student ID: ${this.studentId}, Grade: ${this.grade}`;
    }

    getRole() {
        return "Student";
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;
    }

    getDetails() {
        return `Name: ${this.name}, Subject: ${this.subject}`;
    }

    getRole() {
        return "Teacher";
    }
}

// Create objects
const student = new Student("Sahil", 101, "A");
const teacher = new Teacher("Rahul", "Mathematics");

// Display details
console.log(student.getDetails());
console.log("Role:", student.getRole());

console.log(teacher.getDetails());
console.log("Role:", teacher.getRole());
