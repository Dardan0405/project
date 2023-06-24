const express =  require("express");
const mysql =  require("mysql");
const cors = require("cors");

const app = express();
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydatabase"
    
})
app.post("/mydatabase", (req, res) => {
    console.log(req.body)
    const sql = "INSERT INTO  login (`name`, `email`,  `passowrd`, confirmpassword) VALUES (?,?,?,?)"
    const  values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.confirmpassword
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.listen(8081, () =>{
    console.log("Listening on port 8081");
});