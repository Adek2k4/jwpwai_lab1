const {Worker} = require('worker_threads');

function runWorker(limit) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./sumWorker.js', { workerData: {limit} });
        worker.on('message', resolve);
        worker.on('error', reject);
    });
}

(async () => {
    console.time('sum');
    const results = await Promise.all([
        runWorker(5e7),
        runWorker(1000),
        runWorker(128762),
        runWorker(5)
    ]);
    console.log("Wyniki", results);
    console.timeEnd("sum");
})();