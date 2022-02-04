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
}