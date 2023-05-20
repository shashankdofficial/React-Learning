const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const {Country, State} = require('country-state-city');

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));

//Home route
app.get('/', (req, res) => {
    console.log("Inside Admin page");
    res.render('admin', { title: "Admin Dashboard" });
})

// console.log(Country.getAllCountries('IN'));
// console.log(State.getStatesOfCountry('IN'));
// console.log("country")



// console.log(Country.getAllCountries('IN'));
// console.log(State.getStatesOfCountry('IN'));
// console.log("country")

app.listen(port, () => {
    console.log("Listening to the server on http://localhost:3000")
})