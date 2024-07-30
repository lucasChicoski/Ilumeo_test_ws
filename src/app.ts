
import express from "express"
import setRouter from "./routes"
import cors from "cors"
const app = express()


app.use(express.json())

app.use(cors({origin: ['http://localhost:3000', 'https://ilumeo-test-ws.onrender.com']}))

setRouter(app)

app.listen(3001, () => {
    console.log("API DE PE")
})








