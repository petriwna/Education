import "./styles.scss"

console.log('MAIN');
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const types_1 = require("./types");
// console.log('Index');
// const mySQL = new types_1.MySQL({
//     host: "127.0.0.1",
//     user: "root",
//     database: "mybd",
//     password: "password"
// });
// mySQL.connection();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQThCO0FBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUM7SUFDcEIsSUFBSSxFQUFFLFdBQVc7SUFDakIsSUFBSSxFQUFFLE1BQU07SUFDWixRQUFRLEVBQUUsTUFBTTtJQUNoQixRQUFRLEVBQUUsVUFBVTtDQUN2QixDQUFDLENBQUM7QUFDSCxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge015U1FMfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuY29uc29sZS5sb2coJ0luZGV4Jyk7XHJcblxyXG5jb25zdCBteVNRTCA9IG5ldyBNeVNRTCh7XHJcbiAgICBob3N0OiBcIjEyNy4wLjAuMVwiLFxyXG4gICAgdXNlcjogXCJyb290XCIsXHJcbiAgICBkYXRhYmFzZTogXCJteWJkXCIsXHJcbiAgICBwYXNzd29yZDogXCJwYXNzd29yZFwiXHJcbn0pO1xyXG5teVNRTC5jb25uZWN0aW9uKCk7Il0sInNvdXJjZVJvb3QiOiIuLiJ9


// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.MySQL = void 0;
// const mysql = require("mysql");
// class MySQL {
//     constructor(config) {
//         this.conn = mysql.createConnection(config);
//         console.log('MySQL');
//     }
//     connection() {
//         console.log('MYConection');
//         this.conn.connect((e) => {
//             if (e) {
//                 console.log(e);
//             }
//             else {
//                 console.log('Connection mySQL');
//             }
//         });
//     }
//     async query(str) {
//         this.conn.query(str, (e, rows, fields) => {
//             if (e) {
//                 console.log(e);
//             }
//             else {
//                 console.log(rows);
//                 return rows;
//             }
//         });
//     }
//     async queryAll(str, cb) {
//         this.conn.query(str, (e, rows, fields) => {
//             if (e) {
//                 console.log(e);
//             }
//             else {
//                 console.log(rows);
//                 cb(rows);
//             }
//         });
//     }
// }
// exports.MySQL = MySQL;
//
// //# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUErQjtBQUUvQixNQUFhLEtBQUs7SUFHZCxZQUFZLE1BQU07UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFDRCxVQUFVO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3BCLElBQUcsQ0FBQyxFQUFDO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDakI7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO2FBQ2xDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsRUFBRTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ2pCO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLEVBQUU7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNqQjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDWjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBckNELHNCQXFDQyIsImZpbGUiOiJ0eXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCA9IHJlcXVpcmUoJ215c3FsJylcclxuXHJcbmV4cG9ydCBjbGFzcyBNeVNRTHtcclxuICAgIGNvbm4gOiBteXNxbC5Db25uZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29ubiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oY29uZmlnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTXlTUUwnKVxyXG4gICAgfVxyXG4gICAgY29ubmVjdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNWUNvbmVjdGlvbicpXHJcbiAgICAgICAgdGhpcy5jb25uLmNvbm5lY3QoKGUpID0+e1xyXG4gICAgICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGlvbiBteVNRTCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgcXVlcnkoc3RyKXtcclxuICAgICAgICB0aGlzLmNvbm4ucXVlcnkoc3RyLCAoZSwgcm93cywgZmllbGRzKT0+IHtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3dzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByb3dzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGFzeW5jIHF1ZXJ5QWxsKHN0ciwgY2Ipe1xyXG4gICAgICAgIHRoaXMuY29ubi5xdWVyeShzdHIsIChlLCByb3dzLCBmaWVsZHMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3dzKTtcclxuICAgICAgICAgICAgICAgIGNiKHJvd3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiLi4ifQ==
