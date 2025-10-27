class Currency {
    rates = {
        EUR: 4.24,
        GBP: 4.89,
        USD: 3.64,
        JPY: 0.024,
        CHF: 4.59
    };
    toPLN(amount, currency) {
        const rate = this.rates[currency.toUpperCase()];
        if (!rate) return `Nieznana waluta: ${currency}`;
        return (amount * rate).toFixed(2);
    }
    getAvailableCurrencies() {
        return Object.keys(this.rates);
    }

}
module.exports = Currency;
