import express from 'express';


import dotenv from 'dotenv'
dotenv.config()


const PORT = 3000
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})