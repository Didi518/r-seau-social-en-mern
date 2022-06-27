const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

// auth
router.post('/inscription', authController.signUp);
router.post('/connexion', authController.signIn);
router.get('/deconnexion', authController.logout);

// user db
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/suivre/:id', userController.follow);
router.patch('/ne-plus-suivre/:id', userController.unfollow);

module.exports = router;
