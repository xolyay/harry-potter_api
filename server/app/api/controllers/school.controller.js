const School = require("../models/school.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const createSchool = async (req, res, next) => {
    try {
        const newSchool = new School();
        newSchool.name = req.body.name;
        newSchool.description = req.body.description;
        newSchool.characters = req.body.characters;
        const SchoolDb = await newSchool.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { school: SchoolDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllSchools = async (req, res, next) => {
    try {
        const schools = await School.find().populate("characters");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { schools: schools }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createSchool, getAllSchools }