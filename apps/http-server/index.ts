import express from 'express'
import { Request, Response } from 'express'
const app = express()

app.get('/signup',(req:Request, res: Response)=>{
   res.send({
    message: "Hello"
   })
})
app.get('/signin',(req:Request, res: Response)=>{
    res.send({
     message: "Hello"
    })
 })
 app.get('/chat',(req:Request, res: Response)=>{
    res.send({
     message: "Hello"
    })
 })

 app.listen(4000);