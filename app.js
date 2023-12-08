const express = require('express');
const app = express();
const path = require("path")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'styles')));


app.get("/", (req, res) => {
    res.render("app")
})

app.listen(8080, () => {
    console.log("Serving on port 8080");
})

