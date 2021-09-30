const router = require('express').Router();

router.get('/blog', (res, req) => {
    res.render('blog')
})

module.exports = router;