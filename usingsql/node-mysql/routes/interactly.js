const express = require("express");
const Router = express.Router();
const mysqlConnection  = require("../db");


//Insert an employees
Router.post('/interactly', (req, res) => {
    let emp = req.body;
    var sql = "SET @contactid = ?;SET @firstname = ?;SET @lastname = ?;SET @email = ?;SET @mobilenumber = ?; \
    CALL InteractlyAddOrEdit(@contactid,@firstname,@lastname,@email,@mobilenumber);";
    mysqlConnection.query(sql, [emp.contactid, emp.firstname, emp.lastname, emp.email,emp.mobilenumber], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted  id : '+element[0].contactid);
            });
        else
            console.log(err);
    })
});



//get ALL
Router.get("/interactly",(req,res) => { 
    mysqlConnection.query('SELECT * FROM interactlydetails', (err,rows, fields) => {
        if(!err)
        {  
            res.send(rows)
        }
        else 
        { 
            console.log(err)
        }
    })
})

//Get ONE
Router.get("/interactly/:id",(req,res) => { 
    mysqlConnection.query('SELECT * FROM interactly WHERE contactid = ?', [req.params.id],(err,rows, fields) => {
        if(!err)
        {  
            res.send(rows)
        }
        else 
        { 
            console.log(err)
        }
    })
})
//UPDATE 
Router.put("/interactly/:id",(req,res) => { 
    let emp = req.body;
    var sql = "SET @contactid = ?;SET @firstname = ?;SET @lastname = ?;SET @email = ?;SET @mobilenumber = ?; \
    CALL InteractlyAddOrEdit(@contactid,@firstname,@lastname,@email,@mobilenumber);";
    mysqlConnection.query(sql, [emp.contactid, emp.firstname, emp.lastname, emp.email,emp.mobilenumber], (err, rows, fields) => {
           if(!err)
        {  
            res.send(rows)
        }
        else 
        { 
            console.log(err)
        }
    })
})


//
Router.delete("/interactly/:id",(req,res) => { 
    mysqlConnection.query('DELETE * FROM interactly WHERE contactid = ?', [req.params.id],(err,rows, fields) => {
        if (!err)
        res.send('Deleted successfully.');
    else
        console.log(err);
    })
})

module.exports = Router;