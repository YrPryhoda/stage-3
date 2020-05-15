const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get('/', async (req, res, next) => {
  // TODO: Implement route controllers for user
  // done
  try {
    const users = await UserService.findAll();
    res.data = users;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware);

router.get('/:id', async (req, res, next) => {
  try {
    const user = await UserService.search({id: req.params.id});
    res.data = user;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware)

router.post('/', createUserValid, async (req, res, next) => {
  try {
    const result = await UserService.create(req.body);
    res.data = result;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware);

router.put('/:id', updateUserValid, async (req, res, next) => {
  try {
    const updatedUser = await UserService.update(req.params.id, req.body);
    res.data = updatedUser;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware)

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedItem = await UserService.delete(req.params.id);
    res.data = deletedItem;
  } catch (error) {
    res.err = error;
  } finally {
    next();
  }
}, responseMiddleware)

module.exports = router;