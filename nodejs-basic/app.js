const coffee = require('./lib/coffe');
const { firstName, lastName } = require('./lib/user');

console.log(firstName);
console.log(lastName);

console.log(coffee)

const moment = require(`moment`);

const date = moment().format("MMM Do YYYY");
console.log(date);