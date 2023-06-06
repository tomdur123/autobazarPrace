const express = require('express');
const router = express.Router();

const userController = require("../controllers/users");

router.get('/', userController.getAllBrands);
router.get('/:id', userController.getUserById);
router.get('/:brand', userController.getUsersByBrand);
router.post('/', userController.postUser);
router.put('/:id', userController.putUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
