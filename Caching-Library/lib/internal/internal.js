const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

module.exports = class InternalCache {
  static async setKey(key, value, exp) {
    const result = myCache.set(key, value, exp);
    return result;
  }

  static async getKey(key) {
    const result = myCache.get(key);
    return result;
  }

  static async delKey(key) {
    const result = myCache.del(key);
    return result;
  }

  static async delKey(key) {
    const result = myCache.del(key);
    return result;
  }
};
