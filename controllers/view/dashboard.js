const router = require('express').Router();

router.get('/', (res, req) => {
    res.render('dashboard')
})

module.exports = router;