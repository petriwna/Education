const mysql = require('mysql');

const connect = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "mybd",
    password: "Testtest1!"
});

connect.connect((error) => {
    if (error) {
        return console.error("Ошибка: " + error.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

function allPerson(){
    const query = 'SELECT * FROM person';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}
allPerson();

function task1(){
    const query = 'SELECT COUNT(*) FROM person';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}

function task2(){
    const query = 'SELECT AVG(age) FROM person';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}

function task3(){
    const query = 'SELECT DISTINCT LastName FROM person ORDER BY LastName';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}

function task4(){
    const query = 'SELECT LastName, COUNT(*) FROM person GROUP BY LastName';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}

function task5(){
    const query = `SELECT LastName FROM person WHERE LastName LIKE \'_%б%_'`;
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}

function task6(){
    const query = 'SELECT * FROM person WHERE Id_Street IS NULL';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}

function task7(){
    const query = 'SELECT person.*FROM person JOIN street ON person.Id_Street = street.ID WHERE street.Name LIKE \'%проспект Правды%\' AND person.Age < 18';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}

function task8(){
    const query = 'SELECT street.ID, street.Name, COUNT(person.ID) FROM street JOIN person ON street.ID = person.Id_Street GROUP BY street.ID, street.Name';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}

function task9(){
    const query = 'SELECT * FROM street WHERE LENGTH(Name) = 6';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}

function task10(){
    const query = 'SELECT street.ID, street.Name FROM street JOIN person ON street.ID = person.Id_Street GROUP BY street.ID, street.Name HAVING COUNT(person.ID) < 3';
    connect.query(query, (error, res) => {
        if(!error) console.log(res);
    });
}