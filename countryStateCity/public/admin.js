const {Country, State} = require('country-state-city');

console.log(Country.getAllCountries('IN'));
console.log(State.getStatesOfCountry('IN'));
console.log("country")

// fetch('api/getdata/',(req, res) => {
//     console.log(req);
// })
