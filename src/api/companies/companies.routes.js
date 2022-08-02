const CompaniesRoutes = require('express').Router();
const { getAllCompanies, getCompaniesById, createCompany, updateCompany, deleteCompany } = require('./companies.controller');


    CompaniesRoutes.get('/getAll', getAllCompanies);
    CompaniesRoutes.get('/getById/:id', getCompaniesById);
    CompaniesRoutes.post('/create', createCompany);
    CompaniesRoutes.patch('/update', updateCompany);
    CompaniesRoutes.delete('/delete', deleteCompany);



    module.exports = CompaniesRoutes;