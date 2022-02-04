import {MySQL} from "./MySQL";
import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('..'))
app.listen(port, async () => {
    console.log(`App start at http://localhost:${port}`);
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
});
