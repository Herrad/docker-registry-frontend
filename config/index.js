var configFromFile = require('./config.json')

function getConfigFromEnvironment() {
    return {
        host: "foo",
        port: "bar"
    }
}

module.exports = function () {
    if (configFromFile) {
        return configFromFile;
    }
    return getConfigFromEnvironment()
}