// TODO: Write code to define and export the Employee class
class Employee {
    // constructor
    constructor(name, id , email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getting the name
    getName() {
        return this.name;
    }
    // getting the id
    getId() {
        return this.id
    }
    // getting the email
    getEmail() {
        return this.email;
    }
    // getting the role
    getRole() {
        return 'Employee'
    }
}
module.exports = Employee;