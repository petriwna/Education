const {createConnection} = require('mysql');

export class MySQL{
    private connect: any;

    constructor(config) {
        this.connect = createConnection(config);
    }

    async connection() {
        this.connect.connect((e) => {
            if (e) {
                console.log(e)
            } else {
                console.log('Connection mySQL')
            }
        })
    }

    async queryAll(str, cb) {
        this.connect.query(str, (e, rows, fields) => {
            if (e) {
                console.log(e)
            } else {
                console.log(rows);
                cb(rows);
            }
        })
    }
}