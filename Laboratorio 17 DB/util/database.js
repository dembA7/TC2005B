const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'colors',
    password: '',
});

module.exports = pool.promise();