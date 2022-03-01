const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

//@desc Get all bootcamps
//@route GET /ap1/v1/bootcamps
//@access Public
const getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            data: bootcamps,
            count: bootcamps.length,
        });
    } catch (error) {
        next(error);
    }
};

//@desc Get single bootcamp
//@route GET /ap1/v1/bootcamps/:id
//@access Public
const getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return next(
                new ErrorResponse(
                    `Bootcamp not found with id ${req.params.id}`,
                    404
                )
            );
        }
        res.status(200).json({
            success: true,
            data: bootcamp,
        });
    } catch (error) {
        next(error);
    }
};

//@desc Create bootcamp
//@route POST /ap1/v1/bootcamps
//@access Private
const createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp,
        });
    } catch (error) {
        next(error);
    }
};

//@desc Update single bootcamp
//@route PUT /ap1/v1/bootcamps/:id
//@access Private
const updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (!bootcamp) {
            return next(
                new ErrorResponse(
                    `Bootcamp not found with id ${req.params.id}`,
                    404
                )
            );
        }
        res.status(200).json({
            success: true,
            message: 'Updated',
        });
    } catch (error) {
        next(error);
    }
};

//@desc Delete single bootcamp
//@route DELETE /ap1/v1/bootcamps/:id
//@access Private
const deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if (!bootcamp) {
            return next(
                new ErrorResponse(
                    `Bootcamp not found with id ${req.params.id}`,
                    404
                )
            );
        }
        res.status(200).json({
            success: true,
            message: `Deleted Bootcamp with id ${req.params.id}`,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
};
