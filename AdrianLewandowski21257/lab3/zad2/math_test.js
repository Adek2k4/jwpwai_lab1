const readline = require('readline');
const math1 = require('./math_module1.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu1() {
  console.log(`
Wybierz działanie (obiekt export):
    1. Dodawanie
    2. Odejmowanie
    3. Pole kwadratu
    4. Objętość kuli
    5. Pierwiastek
    6. Wyjście do drugiego menu
`);
  rl.question('Twój wybór: ', handleChoice1);
}

function handleChoice1(choice) {
  switch (choice.trim()) {
    case '1':
      math1.dodawanie(rl, menu1);
      break;
    case '2':
      math1.odejmowanie(rl, menu1);
      break;
    case '3':
      math1.polekwadratu(rl, menu1);
      break;
    case '4':
      math1.objetosckuli(rl, menu1);
      break;
    case '5':
      math1.pierwiastek(rl, menu1);
      break;
    case '6':
      menu2();
      break;
    default:
      console.log('Nieprawidłowy wybór!\n');
      menu1();
  }
}

menu1();



const MathModule = require('./math_module2.js');

const math2 = new MathModule(rl);

function menu2() {
  console.log(`
Wybierz działanie (obiektowo):
    1. Dodawanie
    2. Odejmowanie
    3. Pole kwadratu
    4. Objętość kuli
    5. Pierwiastek
    6. Wyjście
`);
  rl.question('Twój wybór: ', handleChoice2);
}

function handleChoice2(choice) {
  switch (choice.trim()) {
    case '1':
      math2.dodawanie(menu2);
      break;
    case '2':
      math2.odejmowanie(menu2);
      break;
    case '3':
      math2.polekwadratu(menu2);
      break;
    case '4':
      math2.objetosckuli(menu2);
      break;
    case '5':
      math2.pierwiastek(menu2);
      break;
    case '6':
      console.log('Koniec programu.');
      rl.close();
      break;
    default:
      console.log('Nieprawidłowy wybór!\n');
      menu2();
  }
}