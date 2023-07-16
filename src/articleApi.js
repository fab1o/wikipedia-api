const Cache = require('./cache.js');

const { dateToString, getLastDay, stringToDate } = require('./utils.js');

/**
 * @access public
 * @version 0.0.1
 * @desc Retrieves information about an article.
 * @see https://wikitech.wikimedia.org/wiki/Analytics/AQS/Pageviews#Pageview_counts_by_article
 */
class ArticleApi {
    /**
     * @access public
     * @param {String} article - Article title.
     */
    constructor(article) {
        this.article = article;

        this.project = 'en.wikipedia.org';

        this.cache = new Cache();
    }

    /**
     * @access public
     * @version 0.0.1
     * @desc Gets the view count of a specific article between two dates.
     * @param {Date} startDate - Start date.
     * @param {Date} endDate - End date.
     * @returns {Number} Total view count.
     * @throws {Error}
     */
    async getViewCountByDate(startDate, endDate) {
        const startDateFormatted = dateToString(startDate);
        const endDateFormatted = dateToString(endDate);

        const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/${this.project}/all-access/all-agents/${this.article}/daily/${startDateFormatted}/${endDateFormatted}`;

        let cache = this.cache.getCache(url);

        if (!cache) {
            const response = await fetch(url);

            cache = await response.json();
        }

        this.cache.saveCache(url, cache);

        return cache.items.reduce((arr, curr) => arr + curr.views, 0);
    }

    /**
     * @access public
     * @version 0.0.1
     * @desc Gets the view count of a specific article for a week.
     * @param {Number} week - Number representing the week of the year, from 1 to 52.
     * @param {Number} year - Number representing the year, ie: 2023.
     * @returns {Number}
     * @throws {Error}
     */
    async getViewCountByWeek(week, year) {
        const day = 7 * (week - 1) + 1;

        const startDate = new Date(year, 0, day);
        const endDate = new Date(year, 0, day + 6);

        return await this.getViewCountByDate(startDate, endDate);
    }

    /**
     * @access public
     * @version 0.0.1
     * @desc Gets the view count of a specific article for a month.
     * @param {Month} month - Number representing the month, from 0 to 11.
     * @param {Number} year - Number representing the year, ie: 2023.
     * @returns {Number} Total view count.
     * @throws {Error}
     */
    async getViewCountByMonth(month, year) {
        const lastDay = getLastDay(month, year);

        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month, lastDay);

        return await this.getViewCountByDate(startDate, endDate);
    }

    /**
     * @access public
     * @version 0.0.1
     * @desc Gets the day of the month where an article got the most page views.
     * @param {Month} month - Number representing the month, from 0 to 11.
     * @param {Number} year - Number representing the year, ie: 2023.
     * @returns {Number} Number representing a day of the month.
     * @throws {Error}
     */
    async getMostViewsMonthDay(month, year) {
        const lastDay = getLastDay(month, year);

        const monthFormatted = (month + 1).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        });

        const startDate = `${year}${monthFormatted}01`;
        const endDate = `${year}${monthFormatted}${lastDay}`;

        const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/${this.project}/all-access/all-agents/${this.article}/daily/${startDate}/${endDate}`;

        let cache = this.cache.getCache(url);

        if (!cache) {
            const response = await fetch(url);

            cache = await response.json();
        }

        let maxViews = 0;
        let day = null;

        cache.items.forEach((item) => {
            if (item.views > maxViews) {
                maxViews = item.views;

                const date = stringToDate(item.timestamp);

                day = date.getDate();
            }
        });

        this.cache.saveCache(url, cache);

        return day;
    }
}

module.exports = ArticleApi;
