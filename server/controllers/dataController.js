 
const Data = require('../models/dataModel');

const getData = async (req, res) => {
    try {
        const data = await Data.find().sort({ timestamp: -1 }).limit(10);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createData = async (req, res) => {
    const { value } = req.body;
    try {
        const data = new Data({ value });
        await data.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getData,
    createData,
};