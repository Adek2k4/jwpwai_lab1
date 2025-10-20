const ce = require('./currency1');
console.log("40 EUR to PLN: " + ce.euro_to_pln(40));
console.log("50 GBP to PLN: " + ce.pound_to_pln(50));
console.log("100 USD to PLN: " + ce.usd_to_pln(100));
console.log("10000 JPY to PLN: " + ce.yen_to_pln(10000));
console.log("200 CHF to PLN: " + ce.chf_to_pln(200));

console.log("\n\n");

const co = require('./currency2');
const currency = new co();
console.log("Available currencies: " + currency.getAvailableCurrencies().join(', '));
console.log("40 EUR to PLN: " + currency.toPLN(40, 'EUR'));
console.log("50 GBP to PLN: " + currency.toPLN(50, 'GBP'));
console.log("100 USD to PLN: " + currency.toPLN(100, 'USD'));
console.log("10000 JPY to PLN: " + currency.toPLN(10000, 'JPY'));
console.log("200 CHF to PLN: " + currency.toPLN(200, 'CHF'));