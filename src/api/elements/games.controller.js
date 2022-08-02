const Element = require('./games.model');
const { setError } = require('../../helpers/utils');

//1
const getAll = async (req, res, next) =>{
    try {
        const elements = await Element.find().populate('companies');
        return res.json ({
            status: 200,
            message: 'Recovered all elements',
            data: { elements: elements }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

//2
const getById = async (req, res, next) =>{
    try {
        const { id } = req.params
        const element = await Element.findById(id).populate('companies');
        if (!element) return next(setError(500, 'Element not found'))
        return res.json ({
            status: 200,
            message: 'Recovered all elements',
            data: { elements: element }
        });
    } catch (error) {
        return next(setError(500, 'Failed element'));
    }
}

//3
const create = async (req, res, next) => {
    try {
        const element = new Element(req.body)
        const elementInBd = await element.save()
        return res.json({
            status: 201,
            message: 'Created new element',
            data: { element: elementInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created element'))
    }
}

//4
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const element = new Element(req.body);
        element._id = id;
        const updatedElement = await Element.findByIdAndUpdate(id, element)
        if (!updatedElement) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated element',
            data: { element: updatedElement }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated element'));
    }
}

//5
const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedElement = await Element.findByIdAndDelete(id)
        if (!deletedElement) return next(setError(404, 'Element not found'))
        return res.json({
            status: 200,
            message: 'deleted element',
            data: { element: deletedElement }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted element'));
    }
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteElement
}