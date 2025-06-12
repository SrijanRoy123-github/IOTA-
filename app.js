const express = require("express");
const app = express();
const path = require('path');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req,res) => {
    res.render("index");
})

app.get('/lordOfRings',(req,res) => {
    res.render("lordOfRings")
})

app.get('/rewiredOrConnexion',(req,res) => {
    res.render("rewiredOrConnexion")
})

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});