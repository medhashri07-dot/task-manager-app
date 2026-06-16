const express = require('express');
const router  = express.Router();
const { check } = require('express-validator');
const auth    = require('../middleware/auth');
const { register, login, getMe } = require('../controllers/authController');

router.post('/register', [
  check('name',     'Name is required').not().isEmpty(),
  check('email',    'Valid email required').isEmail(),
  check('password', 'Password min 6 chars').isLength({ min: 6 }),
], register);

router.post('/login', [
  check('email',    'Valid email required').isEmail(),
  check('password', 'Password required').exists(),
], login);

router.get('/me', auth, getMe);

module.exports = router;