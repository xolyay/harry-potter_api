const express = require("express");
const router = express.Router();

const { createSchool, getAllSchools } = require("../controllers/school.controller");

router.post("/create", createSchool);
router.get("/", getAllSchools);

module.exports = router;