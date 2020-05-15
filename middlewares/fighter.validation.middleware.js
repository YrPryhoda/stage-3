const { fighter } = require('../models/fighter');
const { check, validationResult } = require('express-validator');

const createFighterValid = async (req, res, next) => {
    const trim = { ignore_whitespace: true };
    await check('name', 'Укажите имя')
        .notEmpty(trim)
        .run(req);
    await check('power', "Укажите силу от 1 до 100")
        .isInt({ min: 1, max: 100 })
        .run(req);
    await check('defense', "Укажите уровень защиты от 1 до 10")
        .isInt({ min: 1, max: 10 })
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

const updateFighterValid = async (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    const trim = { ignore_whitespace: true };
    for (let key in req.body) {
        if (key === 'name') {
            await check('name', 'Укажите имя')
                .notEmpty(trim)
                .run(req);
            continue;
        } else if (key === 'power') {
            await check('power', "Укажите силу от 1 до 100")
                .isInt({ min: 1, max: 100 })
                .run(req);
            continue;
        } else if (key === 'defense') {
            await check('defense', "Укажите уровень защиты от 1 до 10")
                .isInt({ min: 1, max: 10 })
                .run(req);
            continue;
        } else {
            return res.status(400)
                .json({
                    error: true,
                    message: 'Forbidden field'
                });
        }
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
    return next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;