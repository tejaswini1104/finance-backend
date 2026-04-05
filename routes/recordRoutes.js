const router = require('express').Router();
const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require('../controllers/recordController');

const { verifyToken, authorize } = require('../middleware/authMiddleware');

router.post('/', verifyToken, authorize('admin'), createRecord);
router.get('/', verifyToken, getRecords);
router.put('/:id', verifyToken, authorize('admin'), updateRecord);
router.delete('/:id', verifyToken, authorize('admin'), deleteRecord);

module.exports = router;