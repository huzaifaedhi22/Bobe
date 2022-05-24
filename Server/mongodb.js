const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.json())
var database

app.get('/',(req,resp)=>{
    resp.send('Welcome to Mongodb')
}
)

app.listen(8080,()=>{
    MongoClient.connect('mongodb://localhost:2707',{userNewUrlParser:true},(error,result)=>{
        if(error) throw error
        database = result.db('Bobe')
        console.log('Connection Successful')
    })
})
