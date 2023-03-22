const router = require("express").Router();
const phones = require('../data/phones.json');

// get all phones
router.get("/phones", (req, res, next) => {
    res.json(phones)  
});

// get one phone by id
router.get('/phones/:id', function(req, res) {
    let id = parseInt(req.params.id);
    for (let i = 0; i < phones.length; i++) {
        if (phones[i].id === id) {
            res.json(phones[i]);
        } else {
            res.json("no such phone")
        }
    } 
});

module.exports = router;