import { ResponseError } from '../errors/response-error.js';
import redisClient from '../middleware/redis.middleware.js';

const getUserRepo = async (username) => {
  const getDataFromRedis = await redisClient.get(username);

  if (getDataFromRedis) {
    return JSON.parse(getDataFromRedis);
  }

  const data = await fetch(`https://api.github.com/search/users?q=${username}`);
  const github = await data.json();

  if (github.total_count !== 1) throw new ResponseError(404, 'Github account not found');

  await redisClient.set(username, JSON.stringify(github));

  return github;
};

export default { getUserRepo };
