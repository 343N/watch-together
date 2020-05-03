require('./ID.js')

class User {



    constructor(name) {
        this.name = name;
        this.id = ID.generateID(12)
    }
}

