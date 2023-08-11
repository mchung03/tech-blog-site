const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

router.post("/login", (req, res) => {
    console.log(req.body)

    req.session.save(() => {
        req.session.logged_in = true;
        req.session.username = req.body.username

        res.send("hello")
    })

})

router.post("/logout", (req, res) => {
    req.session.destroy();

    res.send("Logout successful!")
})

module.exports = router;
