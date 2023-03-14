import express from 'express'

const people = [
    { id: 1, name: 'Flavio' },
    { id: 2, name: 'Roger' }
] // list of objects representing people with an id, not JSON

const app = express() //bring express to create a server

app.get('/', (req, res) => res.send('Hello World!')) //search in `/` in server and send `hello world` so we can view this the web

app.get('/people', (req, res) => {
    res.json(people)
}) //obtain from the path /people the list fo pepople that we create 

app.get('/person/:id', (req, res) => { 
    const id = parseInt(req.params.id)
    const person = people.find(person => person.id === id)

    if (person) {
    res.json(person)
    return
    }

    res.sendStatus(404)
}) // this will get the information of a person using the id property, in this case 1 or 2

app.listen(3000, () => console.log('Server ready')) //the serves is hosted in port 3000 and in cosole send the `server ready` when everything is allright

//ctrl + c close the server