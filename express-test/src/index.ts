import express from "express"

export const app =  express()
app.use(express.json())

app.post("/sum", (req, res) => {
let a = req.body.a
let b = req.body.b

let result = a + b
res.json({result})
})
