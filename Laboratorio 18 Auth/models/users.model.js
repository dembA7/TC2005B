const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    constructor(newUser) {
        this.nombre = newUser.nombre || 'John Doe';
        this.username = newUser.username || 'johndoe';
        this.password = newUser.password || 'johndoejohndoe';
    }

    save() {
        return bcrypt.hash(this.password, 12)
        .then((encryptedPassword) => {
            return db.execute(`
                INSERT INTO usuarios (nombre, username, password)
            values (?, ?, ?)
            `, [this.nombre, this.username, encryptedPassword]);
        })
        .catch((error) => {console.log(error)});
    }

    static fetchOne(username){
        return db.execute(`
            SELECT * 
            FROM usuarios
            WHERE username = ?
        `, [username]);
    }
}