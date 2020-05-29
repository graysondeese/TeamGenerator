// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    // constructor
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // getting the school
    rtSchool() {
        return this.school
    }
    rtRole() {
        return 'Intern'
    }
}
// exporting the Intern class
module.exports = Intern;