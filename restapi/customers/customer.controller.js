const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('./middleware/validate-request');
const authorize = require('./middleware/authorize')
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticateSchema, authenticate);
router.post('/register', registerSchema, register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id',  getById);
router.put('/:id', updateSchema, update);
router.delete('/:id', _delete);

// , authorize() khi nao lam dang nhap bo vao getall
//authorize() put, delete
module.exports = router;

function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function registerSchema(req, res, next) {
    const schema = Joi.object({
        mail: Joi.string().required(),
        username: Joi.string().required(),
        fullName: Joi.string().required(),
        address: Joi.string().required(),
        phone: Joi.string().required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getCurrent(req, res, next) {
    res.json(req.user);
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        mail: Joi.string().empty(''),
        username: Joi.string().empty(''),
        fullName: Joi.string().empty(''),
        gender: Joi.string().empty(''),
        phone: Joi.string().empty(''),
        address: Joi.string().empty(''),
        password: Joi.string().min(6).empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
  userService.update(req.params.id, req.body)
      .then(user => res.json(user))
      .catch(next);
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(next);
}