const express = require('express');
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'SQL@harjas',
  database: 'manhwas_db',
});

module.exports = db;