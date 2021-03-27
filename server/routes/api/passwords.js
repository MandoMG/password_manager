const express = require('express');
const router = express.Router();

// passwordData on db
// id, dbUser, websiteName, username, password

const storedPasswords = [
    {websiteName: 'Facebook', userName: 'mandoFb', password: 'facebookPass'},
    {websiteName: 'Twitter', userName: 'mandoTw', password: 'twitterPass'},
    {websiteName: 'Instagram', userName: 'mandoIg', password: 'instagramPass'},
    {websiteName: 'GMail', userName: 'mandoGm', password: 'gmailPass'}
]

// api/passwords/
router.get('', ((req, res) => {
    res.json(storedPasswords);
}));

router.post('', ((req, res) => {
    const newPassword = {websiteName: req.body.websiteName, userName: req.body.userName, password: req.body.password};
    storedPasswords.push(newPassword);

    res.json(storedPasswords);
}));

module.exports = router;