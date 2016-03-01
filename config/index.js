var configFromFile = require('./config.json')

module.exports = function () {
    function getConfigFromEnvironment() {
        return {
            host: "foo",
            port: "bar"
        }
    }

    var config = getConfigFromEnvironment()
    if (configFromFile) {
        config = configFromFile;
    }

    return {
        getApiAddress: function () {
            return "https://" + config.host + ":" + config.port + "/v2"
        }
    }

}