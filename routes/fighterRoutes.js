const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

router.get('/', async (req, res) => {
  try {
    await FighterService.findAll();
    res.status(200).json('Боец успешно создан!')
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error.message
    })
  }

})
router.get('/:id', (req, res) => {

})
router.post('/', createFighterValid, async (req, res) => {
  try {
    await FighterService.create(req.body);
    res.status(200).json('Боец успешно создан!')
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error.message
    })
  }

})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
// TODO: Implement route controllers for fighter

module.exports = router;