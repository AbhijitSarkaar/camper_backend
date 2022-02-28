//@desc Get all bootcamps
//@route GET /ap1/v1/bootcamps
//@access Public
const getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'display all bootcamps' });
};

//@desc Get single bootcamp
//@route GET /ap1/v1/bootcamps/:id
//@access Public
const getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `get bootcamp ${req.params.id}`,
    });
};

//@desc Create bootcamp
//@route POST /ap1/v1/bootcamps
//@access Private
const createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'create new bootcamp' });
};

//@desc Update single bootcamp
//@route PUT /ap1/v1/bootcamps/:id
//@access Private
const updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `update bootcamp ${req.params.id}`,
    });
};

//@desc Delete single bootcamp
//@route DELETE /ap1/v1/bootcamps/:id
//@access Private
const deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `delete bootcamp ${req.params.id}`,
    });
};

module.exports = {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
};
