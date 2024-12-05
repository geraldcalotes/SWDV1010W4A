const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { readData } = require('../utils/file');
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get("/home",(req,res) => {
	res.render("home");

});

router.post("/users",userController.createUser);
router.post("/users/:id/update",userController.updateUser);
router.post("/users/:id/delete",userController.deleteUser);

router.get("/api/v1/users",async(req,res) => {
	const data = await readData();
	res.json(data);
});

module.exports = router;
