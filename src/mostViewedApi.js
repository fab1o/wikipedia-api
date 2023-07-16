const Cache = require('./cache.js');

const { dateToString } = require('./utils.js');

/**
 * @access public
 * @version 0.0.1
 * @desc Retrieves lists of most viewed articles.
 * @see https://wikitech.wikimedia.org/wiki/Analytics/AQS/Pageviews#Most_viewed_articles
 */
class MostViewedApi {
    /**
     * @access public
     */
    constructor() {
        this.project = 'en.wikipedia.org';
        this.cache = new Cache();
    }

    /**
     * @access public
     * @version 0.0.1
     * @desc Retrieves a list of the most viewed articles for a day.
     * @param {Date} date - Date to look up.
     * @returns {Array<Object>} List of Articles.
     * @throws {Error}
     */
    async getMostViewedByDay(date) {
        const dateFormatted = dateToString(date, '/');

        const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${this.project}/all-access/${dateFormatted}`;

        let cache = this.cache.getCache(url);

        if (!cache) {
            const response = await fetch(url);

            cache = await response.json();
        }

        this.cache.saveCache(url, cache);

        return cache.items[0].articles;
    }

    /**
     * @access public
     * @version 0.0.1
     * @desc Retrieves a list of the most viewed articles for a week.
     * @param {Number} week - Number representing the week of the year, from 1 to 52.
     * @param {Number} year - Number representing the year, ie: 2023.
     * @returns {Array<Object>} List of Articles.
     * @throws {Error}
     */
    async getMostViewedByWeek(week, year) {
        const day = 7 * (week - 1) + 1;

        let articles = [];

        // gather articles from 7 days in a row and consolidate to the list
        for (let i = 0; i < 7; i++) {
            const startDate = new Date(year, 0, day + i);
            const articlesPerDay = await this.getMostViewedByDay(startDate);

            articlesPerDay.forEach((itemPerDay) => {
                const article = articles.find(
                    (item) => item.article === itemPerDay.article
                );

                if (article) {
                    article.views += itemPerDay.views;
                } else {
                    articles.push(itemPerDay);
                }
            });
        }

        // maintain consistency
        return articles.sort((a, b) => b.views - a.views).splice(0, 1000);
    }

    /**
     * @access public
     * @version 0.0.1
     * @desc Retrieves a list of the most viewed articles for a month.
     * @param {Number<Month>} month - Number representing the month, from 0 to 11.
     * @param {Number} year - Number representing the year, ie: 2023.
     * @returns {Array<Object>} List of Articles.
     * @throws {Error}
     */
    async getMostViewedByMonth(month, year) {
        const monthFormatted = (month + 1).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        });

        const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${this.project}/all-access/${year}/${monthFormatted}/all-days`;

        let cache = this.cache.getCache(url);

        if (!cache) {
            const response = await fetch(url);

            cache = await response.json();
        }

        this.cache.saveCache(url, cache);

        return cache.items[0].articles;
    }
}

module.exports = MostViewedApi;
