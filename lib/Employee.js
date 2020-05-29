// TODO: Write code to define and export the Employee class
class Employee {
    // constructor
    constructor(name, id , email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getting the name
    rtName() {
        return this.name;
    }
    // getting the id
    rtId() {
        return this.id
    }
    // getting the email
    rtEmail() {
        return this.email;
    }
    // getting the role
    rtRole() {
        return 'Employee'
    }
}
module.exports = Employee;