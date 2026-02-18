import mysql from 'mysql2/promise';

const connection =await mysql.createConnection({
    host:'127.0.0.1', //localhost
    user:'root',
    password:'123456789',
    database:'COURSE_ADVISING'
})

export { connection };

