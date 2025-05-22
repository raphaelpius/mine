const express=require('express');
const app=express();
const cors=require('cors');
const mysql2=require('mysql2');

app.use(express.json());
app.use(cors( {}));

const conn=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'besha'
});

conn.connect((err)=>{
    if(err){
        console.log('db not connected',err)

    }else{
        console.log('db connected')
    }
})

//isert

app.post('/insert',(req,res)=>{
    const{username,password,date}=req.body;
    console.log(username,password,date);
    conn.query('INSERT INTO mynew(name,password,date) VALUES(?,?,?)',[username,password,date],(err,result)=>{
        if(err){
            console.log('error in insert',err)
        }

        else{
            console.log(result)
        }
    })
});

//retrive
app.get('/retrieve',(req,res)=>{
    const query='SELECT * FROM mynew';
    conn.query(query,(err,result)=>{
        if(err){
            console.log('not retrieved',err);

        }else{
             console.log("retrieve data");
            res.send(result);
        }
    });
});


///delete
app.post('/delete/:id',(req,res)=>{
    const {id}=req.params
    const query='DELETE FROM mynew WHERE id=?'
    conn.query(query,[id],(err,result)=>{
        if(err){
            console.log('not deleted',err);
        }
        else{
            console.log('deleted');
            res.json({massage:"deleted"});
        }
    });
});


//login
app.post('/login',(req,res)=>{
    const {name,password}=req.body;
    console.log(name,password);
    const query='SELECT * FROM mynew WHERE name=? AND password=?';             
    conn.query(query,[name,password],(err,result)=>{
        if(err){
            console.log('error not login',err);
        }
        else if(result.length>0){
                console.log(result);
                res.json({message:'login successfully'});
            }
            else{
                console.log(result);
                res.json({message:'fail'});
            }
        
    });
});



//update
app.post('/update/:id',(req,res)=>{
    const {id}=req.params;
    const {name,password}=req.body;
    console .log(name,password);
    const query='UPDATE mynew SET name=?,password=? WHERE id=?';
    conn.query(query,[name,password,id],(err,result)=>

    {
        if(err){
            console.log('not updated',err);
        }
        else{
            console.log('updated');
            res.json({message:'updated'});
        }
    })
});

  
//report
app.get('/report',(req,res)=>{
    const query='SELECT salary.amount FROM salary INNER JOIN mynew ON mynew.id=mynew';
    conn.query(query,(err,result)=>{
        if(err){
            console.log('not retrieved',err);

        }else{
             console.log("retrieve data");
            res.send(result);
        }
    });
});


app.listen('5000',(req,res)=>{
    console.log('inserted on localhost:5000')
});