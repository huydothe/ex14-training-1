const http = require('http');
const mysql = require("mysql");
const qs = require('qs');
const port = 8080;

const connection = mysql.createConnection({
    host:'localhost',
    user:'huydo',
    password:'Huydothe1999@',
    database:'mydatabase',
    charset: 'utf8_general_ci'
})

connection.connect(function (err) {
    if (err) {
        throw err.stack;
    }
    else {
        console.log("connect success");
    }
});

const server = http.createServer(async (req, res)=>{
    try {
        if (req.url === '/user' && req.method === 'POST') {
            const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const data = Buffer.concat(buffers).toString();
            const userdata = JSON.parse(data);
            const sql = `insert into customersTable(name,address) values('${userdata.name}','${userdata.address}');`;
            connection.query(sql, (err, results, fields) => {
                if (err) {
                    throw err;
                } else {
                    res.end('success');
                }
            })
        }
    }
    catch (err){
        return res.end(err.message);
    }
})

server.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});