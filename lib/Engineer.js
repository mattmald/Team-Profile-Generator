const Employee = require("./Employee.js")

class Enginner extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    getRole() {return "Enginner"}
    getGithub() {return this.github}
}


module.exports = Enginner