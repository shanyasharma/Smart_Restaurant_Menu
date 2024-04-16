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



app.get('/maharashtra', (req, res) => {
    res.render('maha/maharashtra');
});

app.get('/starters1', (req, res) => {
    res.render('maha/starters1');
});

app.get('/maincourse1', (req, res) => {
    res.render('maha/maincourse1');
});

app.get('/desserts1', (req, res) => {
    res.render('maha/desserts1');
});





app.get('/gujarat', (req, res) => {
    res.render('guju/gujarat');
});

app.get('/starters2', (req, res) => {
    res.render('guju/starters2');
});

app.get('/maincourse2', (req, res) => {
    res.render('guju/maincourse2');
});

app.get('/desserts2', (req, res) => {
    res.render('guju/desserts2');
});





app.get('/southindian', (req, res) => {
    res.render('south/southindian');
});

app.get('/starters3', (req, res) => {
    res.render('south/starters3');
});

app.get('/maincourse3', (req, res) => {
    res.render('south/maincourse3');
});

app.get('/desserts3', (req, res) => {
    res.render('south/desserts3');
});





app.post('/signup', async (req, res) => {
    const data={
        email : req.body.email,
        password:req.body.password
    }

    await LogInCollection.insertMany([data])

    res.render("login")

})
    
    

app.post('/login',async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ email: req.body.email })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.email}` })
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