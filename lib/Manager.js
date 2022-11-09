const Employee = require("./Employee.js")

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {return "Enginner"}
    getOfficeNumber() {return this.officeNumber}
}


module.exports = Manager