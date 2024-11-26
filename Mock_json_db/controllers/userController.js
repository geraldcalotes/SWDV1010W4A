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
async function editUser(req, res) {
    try {

    } catch (error) {

    }
}

async function deleteUser(req, res) {
    try {

    } catch (error) {

    }
}

module.exports = {
    createUser,editUser,deleteUser,
}