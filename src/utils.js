/**
 * @access private
 * @desc Converts a string that comes from Api to a Date object.
 * @param {String} date - A date string in format YYYYMMDD...
 * @returns {Date}
 */
function stringToDate(date) {
    return new Date(
        `${date.substring(0, 4)}/${date.substring(4, 6)}/${date.substring(
            6,
            8
        )}`
    );
}

/**
 * @access private
 * @desc Converts a Date object to a string formatted for the Api.
 * @param {Date} date - A date object.
 * @param {String} [separator=''] - Separator character.
 * @returns {String} - Formatted to YYYYMMDD
 */
function dateToString(date, separator = '') {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dayFormatted = day.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
    });
    const monthFormatted = month.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
    });

    return `${year}${separator}${monthFormatted}${separator}${dayFormatted}`;
}

/**
 * @access private
 * @desc Gets the last day of the month and year.
 * @param {Month} month - Number representing the month.
 * @param {Number} year - Number representing the year.
 * @returns {Number}
 */
function getLastDay(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

/**
 * @access private
 */
module.exports = {
    stringToDate,
    dateToString,
    getLastDay,
};
