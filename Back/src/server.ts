import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import apiRoutes from './routes/api'

dotenv.config()

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({extended: true}))

app.use(apiRoutes)

app.use((req, res) => {
    res.status(404)
    res.json({error: 'Endpoint não encontrado'})
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})