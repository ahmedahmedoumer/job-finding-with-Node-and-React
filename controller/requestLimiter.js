import rate from 'express-rate-limit'
const limiter=rate({
  windowMs:1 * 60 * 1000,
  max:10
});
export default limiter;