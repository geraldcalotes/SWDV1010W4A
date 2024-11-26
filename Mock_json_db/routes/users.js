const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get("/home",(req,res) => {
	res.render("home");

});

router.post("/users",userController.createUser);
router.post("/users/:id/update",userController.updateUser);
router.post("/users/:id/delete",userController.deleteUser);

module.exports = router;
