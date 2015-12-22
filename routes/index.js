var express = require('express');
var router = express.Router();
var config = require('../config')();

module.exports = function createRoute(listRepositories, listTags) {
    /* GET home page. */
    router.get('/', listRepositories, function (req, res, next) {
        var repostories = req.repositories.map(repo => ({
            raw: repo,
            url: encodeURIComponent(repo)
        }));

        res.render('index', {
            repositories: repostories
        });
    });
    /* GET home page. */
    router.get('/repository', listTags, function (req, res, next) {
        res.render('repository', {
            image: req.image
        });
    });

    return router;
}