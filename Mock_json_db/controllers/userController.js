const fs = require('fs').promises;
const filePath = '../database.json';
const { readData, writeData } = require('../utils/file');


async function createUser(req, res) {
    try {
        const data = await readData();
        const lastUser = data.users[data.users.length-1];
         const nextId = lastUser? lastUser.id +1 : 1;
        
        const newUser = {
            id:nextId,
            username:req.body.username,
            first_name:req.body.first_name,
            email:req.body.email,
        }

        data.users.push(newUser);
        await writeData(data);
        res.status(200).json('User added successfully');

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
async function updateUser(req, res) {
    try {
        const data = await readData();
        const userId = parseInt(req.params.id);
        const userIndex = data.users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json('User not found');
        }
        data.users[userIndex] = {
            ...data.users[userIndex],
            username: req.body.new_username || data.users[userIndex].username,
            first_name: req.body.new_first_name || data.users[userIndex].first_name,
            email: req.body.new_email || data.users[userIndex].email
        };

        await writeData(data);
        res.redirect("/home");


    } catch (error) {

    }
}

async function deleteUser(req, res) {
    try {
        const data = await readData();
        const userId = parseInt(req.params.id);
        const userIndex = data.users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json('User not found');
        }

        data.users.splice(userIndex, 1);
        await writeData(data);
        res.redirect("/home");

    } catch (error) {

    }
}

module.exports = {
    createUser,updateUser,deleteUser,
}