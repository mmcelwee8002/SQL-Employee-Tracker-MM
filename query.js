const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

