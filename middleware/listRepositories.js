module.exports = function (apiClient) {
    return function (req, res, next) {
        apiClient.makeRequest('/_catalog')
            .then(function (data) {
                req.repositories = data.repositories;
                next();
            })
            .catch(function (err) {
                next(err);
            });
    };
}