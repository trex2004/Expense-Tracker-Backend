import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import userRouter from './routes/userRoutes.js'
import transactionRouter from './routes/transactionRoutes.js'


//constants
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000


//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cors({origin: 'https://expense-manger-frontend.vercel.app'}));

//routes
app.use('/api/v1/users',userRouter)
app.use('/api/v1/transactions',transactionRouter)


//static files

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
