import express, { Express, Request, Response } from "express";
const app = express()

var counter = 0 ;

app.get("/", (req:Request,res:Response)  => {
    counter++;
    res.send( `
    <h1> You are the ${counter} visitor of this page </h1>
    `)
} )

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)   
})



