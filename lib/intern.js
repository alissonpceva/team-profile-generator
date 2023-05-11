const employee = require("./employee");

class intern extends employee {
    constructor (name, id, email, school) {
        this.school = school
    }

getSchool() {
    return this.school
}

getRole() {
    return 'intern'
}// Overridden to return 'Intern'

}

module.exports = intern;
