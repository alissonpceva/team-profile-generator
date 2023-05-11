const employee = require("./employee");

class engineer extends employee {
    constructor (name, id, email, github) {
        this.github = github
    }

getGithub() {
    return this.github
}

getRole() {
    return 'engineer'
}// Overridden to return 'Engineer'

}

module.exports = engineer