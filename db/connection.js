const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'EGRJ!tBH@5$',
        database: 'election',
    },
    console.log('Connected to the Employee database.')
);




module.exports = db;
