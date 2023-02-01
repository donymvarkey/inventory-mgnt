const express = require('express');
const router = express.Router();
const { getServerHealthStatus } = require('../../controllers/health');

router.get('/', getServerHealthStatus);

module.exports = router;
