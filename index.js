const fs = require("fs");
console.log("Początek skryptu.");
fs.readFile('package.json', function (err, data) {
if (err) return console.error(err);
console.log(data.toString());
});
console.log("Koniec skryptu.");
// w tym przypadku odczyt pliku jest asynchroniczny
// (nie blokuje dalszego wykonywania skryptu)