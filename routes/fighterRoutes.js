const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const fightersList = await FighterService.findAll();
    res.status(200).json(fightersList)
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
    const result = await FighterService.create(req.body);
    res.status(200).json(result)
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