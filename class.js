class School {
    static totalStudents = 0;
    constructor(){
        this.Studentlist=[];
    }
    addStudent( name,StudentID,grade,address){
        const student = { 
            name: name,
            StudentID:StudentID,
            grade:grade,
            address: address,
            
        };
        this.Studentlist.push(student);
             student.totalStudents++;

    }
    displayStudent(){
        console.log("studentlist:", this.Studentlist);
        confirm.log("totalStudents:", School.totalStudents);

    }
    
}
 const School1 = new School() ;

 School.addStudent("Sahil",101,"A","mumbai");
 

 School.displayStudent();