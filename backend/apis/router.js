const deleteComplaint = require('./delete');
const getComplaints = require('./get');
const register = require('./register');

const router = require('express').Router();

router.post('/register', register);

router.get('/get/complaints', getComplaints);

router.delete('/delete/complaint/:id', deleteComplaint);

module.exports = router;