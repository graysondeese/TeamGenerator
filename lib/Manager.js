// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    // constructor
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
    // getting the office num
    rtOfficeNum() {
        return this.officeNum;
    }
    // getting the role
    rtRole() {
        return 'Manager'
    }
}
// exporting the Manager class
module.exports = Manager;
