const { user } = require('../models/user');
const { check, validationResult } = require('express-validator');


const createUserValid = async (req, res, next) => {
    const trim = { ignore_whitespace: true };
    await check('email', 'Укажите почту gmail')
        .matches(/[a-zA-Z0-9]+(@gmail.com$)/)
        .run(req);
    await check('firstName', 'Укажите имя')
        .notEmpty(trim)
        .run(req);
    await check('lastName', 'Укажите фамилию')
        .notEmpty(trim)
        .run(req);
    await check('password', "Пароль должен быть не короче 3 символов")
        .isLength({ min: 3 })
        .run(req);
    await check('phoneNumber', 'Укажите номер в формате +38ХХХХХХХХХХ')
        .isMobilePhone(['uk-UA'], { strictMode: true })
        .run(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let resMsg = '';
        errors.errors.forEach(msg => resMsg += `${msg.msg}; `);
        return res.status(400)
            .json({
                error: true,
                message: resMsg
            });
    }
    return next();
}

const updateUserValid = async (req, res, next) => {
    const trim = { ignore_whitespace: true };
    // TODO: Implement validatior for user entity during update
    for (let key in req.body) {
        key === 'email' && await check('email', 'Укажите почту gmail')
            .matches(/[a-zA-Z0-9]+(@gmail.com$)/)
            .run(req);
        key === 'password' && await check('password', "Пароль должен быть не короче 3 символов")
            .isLength({ min: 3 })
            .run(req);
        key === 'firstName' || key === 'lastName' && await check(key, 'Пустое поле')
            .notEmpty(trim)
            .run(req);
        key === 'phoneNumber' && await check('phoneNumber', 'Укажите номер в формате +38ХХХХХХХХХХ')
            .isMobilePhone(['uk-UA'], { strictMode: true })
            .run(req);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let resMsg = '';
        errors.errors.forEach(msg => resMsg += `${msg.msg}; `);
        return res.status(400)
            .json({
                error: true,
                message: resMsg
            });
    }
    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;