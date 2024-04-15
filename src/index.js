const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")
const LogInCollection = require("./mongo")
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../views')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set("view engine", "hbs")
app.set("views", tempelatePath)
app.use(express.static(publicPath))



app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('maha/maharashtra', (req, res) => {
    res.render('maha/maharashtra');
});


app.post('/signup', async (req, res) => {
    const data={
        name : req.body.name,
        password:req.body.password
    }

    await LogInCollection.insertMany([data])

    res.render("login")

})
    
    

app.post('/login',async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }

    } 
    
    catch (e) {

        res.send("wrong details")

    }
})


app.listen(3000, () => {
    console.log('port connected');
})