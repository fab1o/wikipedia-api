const { MostViewedApi, Month } = require('../src/index.js');

describe('MostViewedApi', () => {
    let mostViewedApi;

    beforeAll(() => {
        mostViewedApi = new MostViewedApi();
    });

    it('should get a list of the most viewed articles for a week.', async () => {
        const articles = await mostViewedApi.getMostViewedByWeek(1, 2023);

        expect(articles).toHaveLength(1000);
        expect(articles[0].rank).toBe(1);
    });

    it('should get a list of the most viewed articles for a month.', async () => {
        const articles = await mostViewedApi.getMostViewedByMonth(
            Month.January,
            2023
        );

        expect(articles).toHaveLength(1000);
        expect(articles[0].rank).toBe(1);
    });

    it('should cache and not call fetch', async () => {
        const spy = jest.spyOn(global, 'fetch');

        const articles = await mostViewedApi.getMostViewedByMonth(
            Month.January,
            2023
        );

        expect(spy).toHaveBeenCalledTimes(0);
        expect(articles).toHaveLength(1000);
        expect(articles[0].rank).toBe(1);
    });
});
