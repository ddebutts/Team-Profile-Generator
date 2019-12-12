//Allows us to use Employee class 
const Employee = require("./employee");

//Engineer class for takes name, id, email from Employee and adds github, role
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

//Makes the class useable
module.exports = Engineer;