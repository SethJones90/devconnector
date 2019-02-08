const express = require('express');
const router = express.Router();

// @route   GET api/profile/test
// @desc    Tests users route
// @access  Public route
router.get('/test', (req, res) => res.json({msg: "Users works"}));

module.exports = router;
