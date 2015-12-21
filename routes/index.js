var express = require('express');
var router = express.Router();
var config = require('../config')();

module.exports = function createRoute(listRepositories) {
    /* GET home page. */
    router.get('/', listRepositories, function (req, res, next) {
        res.render('index', {
            repositories: req.repositories
        });
    });

    return router;
}