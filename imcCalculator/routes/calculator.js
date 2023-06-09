var express = require('express');
var calculatorSvc = require('../services/calculator');

var router = express.Router();

/* documents the calculator usage */
router.get('/', function(req, res) {
    console.log('imc calculator running ...');
    res.render('imcCalculator', { title: 'Imc Calculator' });
});

/* calculate the sum of two numbers */
router.post('/', function(req, res) {
    console.log('imc calculator running ...');
    const payload = req.body;
    var value = calculatorSvc.sum(payload.weight, payload.height);
    res.json({ weight: payload.weight, height: payload.height, imc: value.valorImc, descricao: value.categoriaImc});

});

module.exports = router;
