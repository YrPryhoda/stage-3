const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

router.get('/', async (req, res, next) => {
  // TODO: Implement route controllers for fighter
  // done
  try { 
    const fightersList = await FighterService.findAll();
    res.data = fightersList;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware)

router.get('/:id', async (req, res, next) => {
  try {
    const fighter = await FighterService.findById(req.params.id);
    res.data = fighter;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware)

router.post('/', createFighterValid, async (req, res, next) => {
  try {
    const result = await FighterService.create(req.body);
    res.data = result;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware)

router.put('/:id', updateFighterValid, async (req, res, next) => {
  try {
    const fighter = await FighterService.update(req.params.id, req.body);
    res.data = fighter;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware)

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedItem = await FighterService.delete(req.params.id);
    res.data = deletedItem;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware)

module.exports = router;