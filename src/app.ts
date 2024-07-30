
import express from "express"
import setRouter from "./routes"
import cors from "cors"
const app = express()


app.use(express.json())

app.use(cors({ origin: '*' }))

setRouter(app)

app.listen(3001, () => {
    console.log("API DE PE")
})








