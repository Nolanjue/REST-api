import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import inputRoutes from './routers/input.js'

//simple project to understand apis and responses
const app = express();
payment = []

app.use(cors())
app.use(bodyParser.json())

app.use('/api/input', inputRoutes)
//using routes to better organize different requests
//api request goes from: app.use url + router url with query function called




app.get('/', (req, res)=> {
    res.json(payment) 
    /*good to define everything in app in small applications, 
    however its good to use routers -> controllers to organize an application*/
});



app.listen(8800, () => {
    console.log('working at http://localhost/8800')
})

//the order of which you place the structure of the data base matters. 
//ex: imports-> define app, define queries/routes, define 'listen' localhost
