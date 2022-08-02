const Company = require('./companies.model');
const { setError } = require('../../helpers/utils');


const getAllCompanies = async (req, res, next) => {
    try{
        const companies = await Company.find();
        return res.json({
            status: 200,
            message: 'Recover all companies',
            data: { companies }
        })
    } catch (error) {
        return next(setError(500, 'Failed all companies'));
    }
}


const getCompaniesById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const company = await Company.findById(id);
        if (!company) return next(setError(404, 'Company not found'));
        return res.json({
            status: 200,
            message: 'Recover company by ID',
            data: { company }
        })
    } catch (error) {
        return next(setError(500, 'Failed company by ID'));
    }
}


const createCompany = async (req, res, next) =>{
    try {
        const CompanyToSave = new Company(req.body);
        const companyDB = await CompanyToSave.save();
        return res.json({
            status: 201,
            message: "Create company",
            data: { companyDB }
        })
    } catch (error) {
        return next(setError(500, "Failed to create company"));
    }
}

//4
const updateCompany = async (req, res, next) => {
    try {
        const { id } = req.params
        const company = new Element(req.body);
        company._id = id;
        const updatedCompany = await Element.findByIdAndUpdate(id, company)
        if (!updatedCompany) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated Company',
            data: { element: updatedCompany }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated company'));
    }
}

//5
const deleteCompany = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedCompany = await Element.findByIdAndDelete(id)
        if (!deletedCompany) return next(setError(404, 'Company not found'))
        return res.json({
            status: 200,
            message: 'deleted company',
            data: { element: deletedCompany }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted company'));
    }
}


module.exports = {
    getAllCompanies,
    getCompaniesById,
    createCompany,
    updateCompany,
    deleteCompany
}
