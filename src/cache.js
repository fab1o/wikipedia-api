/**
 * @access private
 * @version 0.0.1
 * @desc Cache management.
 */
module.exports = class Cache {
    constructor() {
        this.cache = {};
    }

    /**
     * @desc Saves cache.
     * @version 0.0.1
     * @param {String} key
     * @param {Object} data
     */
    saveCache(key, data) {
        this.cache[key] = data;
    }

    /**
     * @desc Retrieves cache.
     * @version 0.0.1
     * @param {String} key
     */
    getCache(key) {
        return this.cache[key];
    }

    /**
     * @desc Clears cache.
     * @version 0.0.1
     */
    clear() {
        this.cache = {};
    }
};
