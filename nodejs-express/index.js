const express = require('express')
const app = express()
const port = 3001
const calc = require('./calculator')

app.get('/', (req, res) => {
  res.send(`Running Calculator no this port ${port}`)
})

app.get('/sum', (req, res) => {
    const {a, b} = req.query
    res.send({result: calc.sum(parseInt(a), parseInt(b))})
})

app.get('/diff', (req, res) => {
    const {a, b} = req.query
    res.send({result: calc.diff(parseInt(a), parseInt(b))}) 
})

app.get('/mult', (req, res) => {
    const {a, b} = req.query
    res.send({result: calc.mult(parseInt(a), parseInt(b))})
})

app.get('/divide', (req, res) => {
    const {a, b} = req.query
    res.send({result: calc.divide(parseInt(a), parseInt(b))})
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})