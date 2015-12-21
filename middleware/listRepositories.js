module.exports = function (apiClient) {
    return function (req, res, next) {
        apiClient.getRepositories()
            .then(function (data) {
                req.repositories = data;
                next();
            })
            .catch(function (err) {
                next(err)
            });
    };
}