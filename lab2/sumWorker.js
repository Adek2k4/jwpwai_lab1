//sumWorker.js
const {parentPort, workerData} = require('worker_threads');

//Odebranie danych od procesu głównego
const limit = workerData.limit;

//Proste obliczenie (ciężka pętla CPU)
let sum = 0;
for(let i=0; i<=limit; i++) {
    sum += i;
}
//Odesłanie wyniku do procesu głównego
parentPort.postMessage(sum)