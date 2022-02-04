import {MySQL} from "./MySQL";
import helmet from "helmet";
const CORS = require('cors');
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
    app.use(helmet({
        contentSecurityPolicy: false,
    }));
    app.use(CORS({
        origin: 'localhost:3306'
    }));
});