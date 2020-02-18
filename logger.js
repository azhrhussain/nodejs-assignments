function logger(log) {
    console.log('log me:', log);
}

function add(a, b) {
    console.log(a + b);
}

// module.exports.logger = logger;
module.exports = {
    logger: logger,
    add: add,
}