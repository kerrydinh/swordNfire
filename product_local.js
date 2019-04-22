var _ = require('lodash');

module.exports = function(app) {
    _products = [];

    /* Create */
    app.post('/product', function (req, res) {
        _products.push(req.body);
        res.json({info: 'Product created successfully'});
    });

    /* Read */
    app.get('/product', function (req, res) {
        res.send(_products);
    });

    app.get('/product/:id', function (req, res) {
        res.send(
            _.find(_products, {
                id: req.params.id
            })
        );
    });

    /* Update */
    app.put('/product/:id', function (req, res) {
        var index = _.findIndex(
            _products,
            { 
                id: req.params.id
            }
        );

        _.merge(_products[index], req.body);
        res.json({info: 'Product updated successfully'});
    });

    /* Delete */
    app.delete('/product/:id', function(req, res) {
        _.remove(_products, {
            id: req.params.id
        })

        res.json({info: 'Product removed successfully'});
    });
}