const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
morgan.token('body', request => 
    JSON.stringify(request.body)
)
app.use(morgan(':method :url :status :body :response-time ms'))


let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people ` + `<br>${new Date().toString()}`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const note = persons.find((n) => n.id === id)
    if(note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.post('/api/persons', (request, response) => {
    const data = request.body
    if(!data.name || !data.number) {
        return response.status(404).json({ error: "content missing" })
    }
    if(persons.find((n) => n.name === data.name) || persons.find((n) => n.number === data.number)) {
        return response.status(404).json({ error: "name and number must be unique" })
    }

    const entry = {
        id: Math.floor(Math.random() * 10000),
        name: data.name,
        number: data.number,
    }

    persons.push(entry)
    response.json(entry)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const note = persons.find((n) => n.id === id)
    if(note) {
       persons = persons.filter((n) => n.id !== id)
       response.json(note)
    } else {
        response.status(404).end()
    }
    
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" })
}

const port = 3001
app.listen(port, () => {
    console.log("started on port " + port)
})