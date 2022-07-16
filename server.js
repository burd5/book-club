const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.static(__dirname + '/public'));


app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:authorName', (request, response) => {
    const authorsName = request.params.authorName.toLowerCase()
    if(authors[authorsName]){
        response.json(authors[authorsName])
    }
    else{
        response.json(authors['wrong'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}! You Better go catch it!`)
})

const authors = {
    'carl sagan':{
        'age': 32,
        'birthPlace':'Cornell, NY'
        },
    'jon krakenaur':{
        'age': 40,
        'birthPlace': 'Seattle, WA'
        },
    'wrong':{
        'age': 0,
        'birthPlace': 'Hell'
    }
}