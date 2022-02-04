import {MySQL} from "./MySQL";
const express = require( "express");

const app = express();
const port = 3006;

app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
    const mySQL = new MySQL({
        host: "127.0.0.1",
        user: "root",
        database: "mybd",
        password: "Testtest1!"
    });
    await mySQL.connection();

    app.get('/person', (req, res) => {
        mySQL.queryAll('SELECT * FROM person', (rows) => {
            res.send(rows);
        });
    });

    app.get('/task1', (req , res) => {
        mySQL.queryAll('SELECT COUNT(*) FROM person', (rows) => {
            res.send(rows);
        });
    });

    app.get('/task2', (req , res) => {
        mySQL.queryAll('SELECT AVG(age) FROM person', (rows) => {
            res.send(rows);
        });
    });

    app.get('/task3', (req , res) => {
        mySQL.queryAll('SELECT DISTINCT LastName FROM person ORDER BY LastName', (rows) => {
            res.send(rows);
        });
    });

    app.get('/task4', (req , res) => {
        mySQL.queryAll('SELECT LastName, COUNT(*) FROM person GROUP BY LastName', (rows) => {
            res.send(rows);
        });
    });

    app.get('/task5', (req , res) => {
        mySQL.queryAll(`SELECT LastName FROM person WHERE LastName LIKE \'_%б%_'`, (rows) => {
            res.send(rows);
        });
    });

    app.get('/task6', (req , res) => {
        mySQL.queryAll('SELECT * FROM person WHERE Id_Street IS NULL', (rows) => {
            res.send(rows);
        });
    });

    app.get('/task7', (req , res) => {
        mySQL.queryAll('SELECT person.*FROM person JOIN street ON person.Id_Street = street.ID WHERE street.Name LIKE \'%проспект Правды%\' AND person.Age < 18', (rows) => {
            res.send(rows);
        });
    });

    app.get('/task8', (req , res) => {
        mySQL.queryAll('SELECT street.ID, street.Name, COUNT(person.ID) FROM street JOIN person ON street.ID = person.Id_Street GROUP BY street.ID, street.Name', (rows) => {
            res.send(rows);
        });
    });

    app.get('/task9', (req , res) => {
        mySQL.queryAll('SELECT * FROM street WHERE LENGTH(Name) = 6', (rows) => {
            res.send(rows);
        });
    });

    app.get('/task10', (req , res) => {
        mySQL.queryAll('SELECT street.ID, street.Name FROM street JOIN person ON street.ID = person.Id_Street GROUP BY street.ID, street.Name HAVING COUNT(person.ID) < 3', (rows) => {
            res.send(rows);
        });
    });
});