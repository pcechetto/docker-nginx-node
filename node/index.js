const express = require('express')
const app = express()
const port = 8080
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('pedro')`
connection.query(sql)
connection.end()

app.get("/", (req, res) => {
    res.send('<h1>pedro informatica</h1>')
})

app.listen(port, ()=> {
    console.log("running on port " + port)
})