const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userID/friends
router.route('/:userID/friends').post(addFriend);

// /api/users/:userID/friends/:friendId
router.route('/:userID/friends/:friendId').delete(removeFriend);

module.exports = router;