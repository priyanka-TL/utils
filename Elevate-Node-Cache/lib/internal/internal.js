const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const InternalCache = {};

InternalCache.setKey = async (key, value) => {
  return myCache.set(key, value, this.Exp_time);
};

InternalCache.getKey = async (key) => {
  return myCache.get(key);
};

InternalCache.delKey = async (key) => {
  return myCache.del(key);
};
InternalCache.init = (Exp_time) => {
  this.Exp_time = Exp_time;
};
module.exports = InternalCache;
