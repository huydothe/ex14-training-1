const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'huydo',
    password:'Huydothe1999@',
    database:'mydatabase',
    charset: 'utf8_general_ci'
})

connection.connect((err)=>{
    if(err){
        throw new Error(err.stack);
    }else {
        console.log('Connect success');
        const sql = "create table customersTable (id int primary key auto_increment, name varchar(50) not null, address varchar(50))";
        connection.query(sql,(err)=>{
            if(err){
                throw new Error(err.message);
            }else {
                console.log('Connect success');
                connection.end;
            }
        });
        return;
    }
})
