const router = require("express").Router();
const phones = require('../data/phones.json');

// get all phones
router.get("/phones", (req, res, next) => {
    res.json(JSON.stringify(phones));
  });

// get one phone by id
router.get('/phones/:id', async (req, res, next) => {
    try {
        const phoneId = req.params.id
        console.log(phoneId);
        const selectedProduct = await phones.id
        res.json(selectedProduct)
    }
    catch (error) {
           console.log(error)
    }
})

module.exports = router;