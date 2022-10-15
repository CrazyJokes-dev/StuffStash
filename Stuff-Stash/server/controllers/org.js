const Org = require("../models/OrgModel");

// @desc      Get all orgs
// @route     GET /api/v1/orgs
// @access    Public
exports.getOrgs = async (req, res, next) => {
  try {
    const orgs = await Org.find({});
    return res.status(200).json({
      success: true,
      count: orgs.length,
      data: orgs,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc      Add orgs
// @route     POST /api/v1/orgs
// @access    Public
exports.addOrg = async (req, res, next) => {
  const { name, OrgAccessCode } = req.body;
  try {
    const org = await Org.create(req.body);
    return res.status(201).json({
      success: true,
      data: org,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};


// @desc      rename orgs
// @route     POST /api/v1/orgs/RenameOrg
// @access    Public
exports.RenameOrg = async (req, res, next) => {
  const { name, OrgAccessCode } = req.body;
  try {
    const org = await Org.create(req.body);
    return res.status(201).json({
      success: true,
      data: org,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
