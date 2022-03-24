const express = require('express')
const app = express()

app.listen(4000, () => {
    console.log('server started at port 4000')
})

app.get('/', (request, response) => {
    response.send('Hello, i am superv.')
})

app.get('/abc', (request, response) => {
    response.send('Hello, i am awsm.')
})

app.get('/r', (request, response) => {
    response.send('Hello, i am awsm.' + Math.random())
})