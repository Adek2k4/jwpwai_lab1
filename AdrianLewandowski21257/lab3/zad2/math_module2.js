class MathModule{
    constructor(rl){
        this.rl = rl;
    }
    dodawanie(next) {
    this.rl.question('Podaj pierwszą liczbę: ', (a) => {
      this.rl.question('Podaj drugą liczbę: ', (b) => {
        const sum = parseFloat(a) + parseFloat(b);
        console.log(`Suma: ${sum}\n`);
        next();
      });
    });
  }

  odejmowanie(next) {
    this.rl.question('Podaj pierwszą liczbę: ', (a) => {
      this.rl.question('Podaj drugą liczbę: ', (b) => {
        const diff = parseFloat(a) - parseFloat(b);
        console.log(`Różnica: ${diff}\n`);
        next();
      });
    });
  }

  polekwadratu(next) {
    this.rl.question('Podaj bok kwadratu: ', (a) => {
      const pole = parseFloat(a) ** 2;
      console.log(`Pole kwadratu: ${pole}\n`);
      next();
    });
  }

  objetosckuli(next) {
    this.rl.question('Podaj promień kuli: ', (r) => {
      const v = (4 / 3) * Math.PI * Math.pow(parseFloat(r), 3);
      console.log(`Objętość kuli: ${v.toFixed(2)}\n`);
      next();
    });
  }

  pierwiastek(next) {
    this.rl.question('Podaj liczbę: ', (a) => {
      const p = Math.sqrt(parseFloat(a));
      console.log(`Pierwiastek kwadratowy: ${p}\n`);
      next();
    });
  }
}

module.exports = MathModule;