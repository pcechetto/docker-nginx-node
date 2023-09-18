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

function findAll(callback) {
    const sql = 'SELECT * FROM people';

    connection.query(sql, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

findAll((err, results) => {
    if (err) {
        console.error('Erro ao buscar registros:', err);
    } else {
        console.log('Registros encontrados:', results);
    }

    // Fecha a conexão com o banco de dados após a consulta

});

app.get("/", (req, res) => {
    findAll((err, results) => {
        if (err) {
            console.error('Erro ao buscar registros:', err);
            res.status(500).send('Erro ao buscar registros');
        } else {
            console.log('Registros encontrados:', results);
            res.send('<h1>Full Cycle Rocks!</h1>' + JSON.stringify(results));
        }
    });
});



app.listen(port, ()=> {
    console.log("running on port " + port)

})