var request = require('request');

module.exports = function (config) {
    return {
        makeRequest: function (endpoint) {
            var target = config.getApiAddress() + endpoint;
            return new Promise(function (resolve, reject) {
                request(target, function (err, response) {
                    console.log(JSON.parse(response.body));
                    if (err) {
                        return reject(new Error(err));
                    }
                    if (response.statusCode != 200 && response.statusCode != "200") {
                        reject(new Error('got ' + response.statusCode + ' from ' + target));
                    }
                    if (!response.body) {
                        reject(new Error('response from ' + target + ' did not contain a body'));
                    }
                    return resolve(JSON.parse(response.body));

                })
            })
        }
    }
}