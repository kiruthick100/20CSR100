const express=require('express');
const bodyparser=require('body-parser');
const{AddTrain,AllTrain,update,updateClass}=require('./controller/Admin')
const {connectDb}=require('./config/db')
const cors=require('cors');
connectDb();
const app=new express();
app.use(cors())
app.use(bodyparser.json())
app.post('/api/AddTrain',AddTrain);
app.get('/api/AllTrain',AllTrain);
app.put('/api/update/:id/:list',update)
app.put('/api/updateclass/:id/:list',updateClass)

app.listen(3000,()=>
{
    console.log("server running")
})