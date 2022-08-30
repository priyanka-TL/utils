const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const InternalCache = {};

InternalCache.setKey = async (key, value, Exp_time) => {
  return myCache.set(key, value, Exp_time);
};

InternalCache.getKey = async (key) => {
  return myCache.get(key);
};

InternalCache.delKey = async (key) => {
  return myCache.del(key);
};

module.exports = InternalCache;
