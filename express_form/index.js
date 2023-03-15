import express from "express"
const app = express()
app.use(express.urlencoded({extended: true})) //tell to express that the data will be enconded in the url

app.get('/', (req,res) => {
    const page = `
        <html>
            <body>
                <h1>Enter a new person:</h1>
                <form action="/person" method="POST">
                    <input type="text" name="name" />
                    <input type="submit">
                </form>
            </body>
        </html>
        ` //this will be the page when someone enter to "/"
        //when submit will try to post that infomration in "/person"
    res.send(page) //here we tell to responde with the page
})

app.post('/person', (req,res) => {
    console.log('new person recived');

    const name = req.body.name //will obtain the name from the request body from the input named "name"
    res.send(name) //send the response to the url /person
    console.log(name); //just send to the terminal
})

app.listen(3000, () => console.log('Server ready')) //upload our server in localhost:3000