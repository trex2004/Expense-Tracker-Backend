import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import router from './routes/userRoutes.js'


//constants
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000


//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//routes
app.use('/api/v1/users',router)

//server start
try{
    connectDB();
    app.listen(PORT, () => {
        console.log(`Server running in port ${PORT}`)
    })
}
catch(error){
    console.log("Something went wrong",error)
}
