var _ = require('lodash');
var Product = require('./product_model.js');

module.exports = function(app) {
    /* Create */
    app.post('/product', function (req, res) {
        var newProduct = new Product(req.body);
        newProduct.save(function(err) {
            if (err) {
                res.json({info: 'Error during product create', error: err});
            }
            res.json({info: 'Product created successfully'});
        });

    });

    /* Read */
    app.get('/product', function (req, res) {
        Product.find(function(err, products) {
            if (err) {
                res.json({info:'Error during find products', error: err});
            }
            res.json({info: 'Products found successfully', data: products});
        });
    });

    app.get('/product/:id', function (req, res) {
        Product.findById(req.params.id, function(err, product) {
            if (err) {
                res.json({info: 'Error during find product', error: err});
            }
            if (product) {
                res.json({info: 'Product found successfully', data: product});
            } else {
                res.json({infor: 'Product not found'});
            }
        });
    });

    /* Update */
    app.put('/product/:id', function (req, res) {
        Product.findById(req.params.id, function(err, product) {
            if (err) {
                res.json({info: 'Error during find product', error: err});
            }
            if (product) {
                _.merge(product, req.body);
                product.save(function(err) {
                    if (err) {
                        res.json({info: 'Error during product update', error: err});
                    }
                    res.json({info: 'Product updated successfully'});
                })
            } else {
                res.json({infor: 'Product not found'});
            }
        });
    });

    /* Delete */
    app.delete('/product/:id', function(req, res) {
        Product.findByIdAndRemove(req.params.id, function(err, product) {
            if (err) {
                res.json({info: 'Error during product remove'});
            }
            if (product) {
                res.json({info: 'Product removed successfully'});
            } else {
                res.json({info: 'Cannot find product to remove'});
            }
        });
    });
}