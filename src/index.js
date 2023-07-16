/**
 * @module wikipediaApi
 */

const ArticleApi = require('./articleApi.js');
const MostViewedApi = require('./mostViewedApi.js');

const Month = require('./enums/month.js');

/**
 * @access public
 * @version 0.0.1
 * @typedef {Object} wikipediaApi
 * @property {ArticleApi} ArticleApi
 * @property {MostViewedApi} MostViewedApi
 * @property {Month} Month
 */
module.exports = {
    ArticleApi,
    MostViewedApi,
    Month,
};
