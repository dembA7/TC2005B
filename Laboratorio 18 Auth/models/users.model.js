const db = require('../util/database');

module.exports = class User {

    constructor(newUser) {
        this.nombre = newUser.nombre || 'John Doe';
        this.username = newUser.username || 'johndoe';
        this.password = newUser.password || 'johndoejohndoe';
    }

    save() {
        return db.execute(`
            INSERT INTO usuarios (nombre, username, password)
            values (?, ?, ?)
        `, [this.nombre, this.username, this.password]);
    }
}