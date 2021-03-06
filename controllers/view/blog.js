const router = require('express').Router();

router.get('/edit/:id', (req, res) => {
    res.render('blogEdit')
})


router.get('/new', (req, res) => {
    res.render('blogNew')
})

router.get('/:id', (req, res) => {
    res.render('blogPost')
})

module.exports = router;