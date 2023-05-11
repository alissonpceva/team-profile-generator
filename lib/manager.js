const employee = require("./employee");

class manager extends employee {
    constructor (name, id, email, officeNumber) {
        this.officeNumber = officeNumber
    }

getRole() {
    return 'manager'
}// Overridden to return 'Manager'

}

module.exports = manager;
