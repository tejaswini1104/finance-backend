const router = require('express').Router();
const { getSummary } = require('../controllers/dashboardController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', verifyToken, getSummary);

module.exports = router;