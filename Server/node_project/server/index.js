// const variable = require("package_name");

const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql")
const crypto=require("crypto")
const multer = require('multer')
const path = require ("path");


var storeex = express()
storeex.use(cors())
storeex.use(bodyparser.json())
storeex.use(express.json())
storeex.use(bodyparser.urlencoded({ extended: true }))
storeex.use(express.static('public'))
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/image')
    },
    filename: (req, file, cb) =>{
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})
let localdb = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ashok978750$",
    database: "sportshop"
})
localdb.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("db connected")
    }
})



storeex.get('/getAllproduct', (request, response) => {
    const selectquery = 'select * from dashboard'
    localdb.query(selectquery, (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result)
        }
    })
})



storeex.post('/register',(req,res)=>{
   
    let sno=crypto.randomUUID().substring(0, 5);
    let dates=new Date();
    var cdate=dates.toISOString().substring(0,10)

    let{name,phoneNo,email,password,roll,dob,address,pincode}=req.body
    let insertQuery=`insert into  register(id,name,phone,email,password,roll,dob,address,pincode,created_by,updated_by,created_date,updated_date,in_active)values('${sno}',?,?,?,?,?,?,?,?,'${sno}','${sno}','${cdate}','${cdate}',1) `
    localdb.query(insertQuery,[name,phoneNo,email,password,roll,dob,address,pincode],(error,result)=>{
        if(error){
            res.send({"status":"error"})
            console.log(error)
        }else{
            res.send({"status":"success"})
        }

    })
})


storeex.post('/login', (request,response)=>{
    let{email, password} = request.body;
    let loginquery = 'select * from register where email=?'
    localdb.query(loginquery,[email],(error, result)=>{
        if(error){
            response.send({"status":"error"})
        } else if(result.length>0){
            let dbemail = result[0].email;
            let dbpassword = result[0].password;
            let id=result[0].id;
            let roll=result[0].roll;
            if(dbemail===email && dbpassword===password){
                response.send({"status":"success","id":id,"roll":roll})
            } else{
                response.send({"status":"invalid"})
            }
        } else{
            response.send({"status":"empty_set"})
        }
    })
})

storeex.post('/addproduct',(req,res)=>{
   
    let sno=crypto.randomUUID().substring(0, 5);
    let dates=new Date();
    var cdate=dates.toISOString().substring(0,10)

    let{productname,description,rating,prize,url}=req.body
    let insertQuery=`insert into  dashboard(product_name,description,rating,prize,url,created_date,updated_date,is_active)values(?,?,?,?,?,'${cdate}','${cdate}',1) `
    localdb.query(insertQuery,[productname,description,rating,prize,url],(error,result)=>{
        if(error){
            res.send({"status":"error"})
            console.log(error)
        }else{
            res.send({"status":"success"})
        }

    })
})

storeex.post('/update',(req,res)=>{
    let{productname,description,rating,prize,url,productid}=req.body
    let insertQuery=`update dashboard set product_name = ?,description = ?,rating = ?,prize = ?,url = ? WHERE id = ?`
    console.log(productid);
    console.log(description);
    localdb.query(insertQuery,[productname,description,rating,prize,url,productid],(error,result)=>{
        if(error){
            res.send({"status":"error"})
            console.log(error)
            
        }else{
            res.send({"status":"success"})
        }

    })
})


storeex.get('/displayoneproduct/:id', (request, response)=>{
    let {id} = request.params
    let getonequerry = 'select * from dashboard where id=?'
    localdb.query(getonequerry,[id], (error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})


storeex.post("/deleteproduct",(request,response) => {
    let id = request.body.id
    let deleteQuery = "delete from dashboard where id=?";
    db.query(deleteQuery,[id],(error,result) => {
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log(result)
        }
    })
})



storeex.listen(3005, () => {
    console.log("your port is running in 3005")
})




