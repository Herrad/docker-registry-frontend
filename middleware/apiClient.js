module.exports = function (config) {
    return {
        getRepositories: function () {
            return new Promise(function (resolve, reject) {
                resolve(["test"]);
            })
        }
    }
}