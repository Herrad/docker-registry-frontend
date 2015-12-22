module.exports = function (apiClient) {
    return function (req, res, next) {
        console.log(req.query)
        if (!req.query || !req.query.repository) {
            return res.redirect('/404')
        }
        var imageName = decodeURIComponent(req.query.repository)
        apiClient.makeRequest('/' + imageName + '/tags/list')
            .then(function (data) {
                req.image = data;
                next();
            })
            .catch(function (err) {
                next(err);
            });
    };

}