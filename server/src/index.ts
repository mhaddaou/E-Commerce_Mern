import express from 'express'
import type { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

const app : Express = express();
dotenv.config()


app.get('/', (req : Request, res : Response) =>{
    res.send('welcome to the express sercver with typescript');
})


app.listen(process.env.PORT, () =>{
    return console.log('server is listening on port ', process.env.PORT);
})

