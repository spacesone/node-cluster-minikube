const express = require("express")

const app = express()

app.use(express.json())

const PORT = 3000

app.get("/", (req,res) => {
    res.status(200).json({
        "ok" : true,
        "message" : "hello world"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})