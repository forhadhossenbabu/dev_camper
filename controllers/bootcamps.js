const Bootcamp = require("../models/Bootcamp");

// @desc        Get all bootcamps
// @routes      GET /api/v1/bootcamps
// access       Public
exports.getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};

// @desc        Get single bootcamp
// @routes      GET /api/v1/bootcamps/:id
// access       Public
exports.getBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) return res.status(400).json({ status: false });

    res.status(200).json({
      status: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};

// @desc        Create bootcamp
// @routes      POST /api/v1/bootcamps
// access       Private
exports.createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc        Update bootcamp
// @routes      PUT /api/v1/bootcamps/:id
// access       Private
exports.updateBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bootcamp) return res.status(400).json({ status: false });

    res.status(200).json({
      status: true,
      data: bootcamp
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};

// @desc        Delete bootcamp
// @routes      DELETE /api/v1/bootcamps/:id
// access       Private
exports.deleteBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) return res.status(400).json({ status: false });

    res.status(200).json({
      status: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
