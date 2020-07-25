
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res)=> {

    /* find() is a mongooes method which gives a list of users */

    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res)=> {

    const username = req.body.username;
    const newUser = new User({username});

    /* save() is a mongoose function that adds the data to database */

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;
