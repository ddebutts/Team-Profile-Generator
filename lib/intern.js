//Allows us to use Employee class 
const Employee = require("./employee");

//Intern class for takes name, id, email from Employee and adds github, role
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern"
    }
}

//Makes the class useable
module.exports = Engineer;