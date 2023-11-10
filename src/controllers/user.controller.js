import userService from '../services/user.service.js';

const getUserRepo = async (req, res, next) => {
  try {
    const { username } = req.query;
    const result = await userService.getUserRepo(username);

    res.status(200).json({ data: result });
  } catch (e) {
    next(e);
  }
};

export { getUserRepo };
