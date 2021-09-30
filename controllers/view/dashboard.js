const router = require('express').Router();

router.get('/:id', (res, req) => {
    res.render('dashboard')
})

module.exports = router;