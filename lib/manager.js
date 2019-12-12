//Allows us to use Employee class 
const Employee = require("./employee");

//Manager class takes name, id, email from Employee and returns role
class Manager extends Employee{
    constructor(name, id, email){
        super(name, id, email);
        this.officenumber = this.officenumber;
    }

    getRole(){
        return "Manager";
    }
}

//Makes the class usable
module.exports = Manager;