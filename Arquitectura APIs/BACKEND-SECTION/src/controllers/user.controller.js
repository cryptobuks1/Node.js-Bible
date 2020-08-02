let _userService = null;
class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async get(req, res) {
    const { userID } = req.params;
    const user = await _userService.get(userID);
    return res.send(user);
  }
  async getAll(req, res) {
    const users = await _userService.getAll();
    return res.send(users);
  }

  async update(req, res) {
    const { body } = req;
    const {userID} = req.params;
    const updateUser = await _userService.update(userID, body);
    return res.send(updatedUser);
  }

  async delete(req, res) {
    const {userID} = req.params;
    const deletedUser = await _userService.delete(userID);
    // retornamos al cliente
    return res.send(deletedUser);
  }
}

module.exports = UserController;
