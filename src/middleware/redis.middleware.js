import redis from 'redis';

const redisClient = await redis
  .createClient({
    url: 'redis://default:AdPJBdJBaK1C2IHLbbmJOOmocLMElDel@viaduct.proxy.rlwy.net:36982'
  })
  .on('error', (err) => console.log('Redis Client Error', err))
  .connect();

export default redisClient;
