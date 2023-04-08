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
                INSERT INTO users (nombre, username, password)
                values (?, ?, ?)
            `, [this.nombre, this.username, encryptedPassword]);
        })
        .catch((error) => {console.log(error)});
    }

    static fetchOne(username){
        return db.execute(`
            SELECT * 
            FROM users
            WHERE username = ?
        `, [username]);
    }

    static fetchPrivilegios(username) {
        return db.execute(`
            SELECT p.nombre
            FROM users u, usuarioRol ur, roles r, rolPrivilegio rp, privilegios p 
            WHERE u.id = ur.idUsuario AND ur.idRol = r.id AND rp.idRol = r.id 
                AND rp.idPrivilegio = p.id AND u.username = ?
        `, [username]);
    }

}