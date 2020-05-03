const ID = require('./ID.js');

class Room {
    


    constructor(name, password){
        this.name = name || "Unnamed."
        this.password = password || null;
        this.id = ID.generateID(12)
    }
}