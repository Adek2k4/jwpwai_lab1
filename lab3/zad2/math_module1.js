exports.dodawanie = function(rl, next) {
  rl.question('Podaj pierwszą liczbę: ', (a) => {
    rl.question('Podaj drugą liczbę: ', (b) => {
      const sum = parseFloat(a) + parseFloat(b);
      console.log(`Suma: ${sum}\n`);
      next();
    });
  });
};

exports.odejmowanie = function(rl, next) {
  rl.question('Podaj pierwszą liczbę: ', (a) => {
    rl.question('Podaj drugą liczbę: ', (b) => {
      const diff = parseFloat(a) - parseFloat(b);
      console.log(`Różnica: ${diff}\n`);
      next();
    });
  });
};

exports.polekwadratu = function(rl, next) {
  rl.question('Podaj bok kwadratu: ', (a) => {
    const pole = parseFloat(a) ** 2;
    console.log(`Pole kwadratu: ${pole}\n`);
    next();
  });
};

exports.objetosckuli = function(rl, next) {
  rl.question('Podaj promień kuli: ', (r) => {
    const v = (4 / 3) * Math.PI * Math.pow(parseFloat(r), 3);
    console.log(`Objętość kuli: ${v.toFixed(2)}\n`);
    next();
  });
};

exports.pierwiastek = function(rl, next) {
  rl.question('Podaj liczbę: ', (a) => {
    const p = Math.sqrt(parseFloat(a));
    console.log(`Pierwiastek kwadratowy: ${p}\n`);
    next();
  });
};
