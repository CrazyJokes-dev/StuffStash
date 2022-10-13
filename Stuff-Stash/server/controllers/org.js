const Org = require("../models/Orgmodel");

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
exports.adduserOrg = async (req, res, next) => {
  const { orgname,orgid,userid } = req.body;

  try {
    const org = await Org.find(req.body.orgname);
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