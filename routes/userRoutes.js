const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get('/', (req, res) => {
console.log('запрос /api/users')
})
router.get('/:id', (req, res) => {

})
router.post('/', createUserValid, async (req, res) => {
  try {
    await UserService.create(req.body);
    res.status(200).json('Пользователь успешно зарегистрирован!')
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
// TODO: Implement route controllers for user

module.exports = router;