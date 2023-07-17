const { ArticleApi, Month } = require('../src/index.js');

describe('ArticleApi', () => {
    let articleApi;

    beforeEach(() => {
        articleApi = new ArticleApi('Brazil');
    });

    it('should get the day of month where article got the most page views.', async () => {
        const day = await articleApi.getMostViewsMonthDay(Month.January, 2023);

        expect(day).toBe(9);
    });

    it('should cache and not call fetch', async () => {
        await articleApi.getMostViewsMonthDay(Month.January, 2023);

        const spy = jest.spyOn(global, 'fetch');

        const day = await articleApi.getMostViewsMonthDay(Month.January, 2023);

        expect(spy).toHaveBeenCalledTimes(0);
        expect(day).toBe(9);
    });

    it('should get the total of view count of a specific article between two dates.', async () => {
        const day = await articleApi.getViewCountByDate(
            new Date(2023, 1, 1),
            new Date(2023, 1, 31)
        );

        expect(day).toBe(447383);
    });

    it('should get the total of view count of a specific article by month.', async () => {
        const day = await articleApi.getViewCountByMonth(Month.January, 2023);

        expect(day).toBe(549205);
    });

    it('should get the total of view count of a specific article by week.', async () => {
        const day = await articleApi.getViewCountByWeek(1, 2023);

        expect(day).toBe(133363);
    });

    it('should get the total of view count of the last week of the year of a specific article.', async () => {
        const day = await articleApi.getViewCountByWeek(52, 2022);

        expect(day).toBe(119286);
    });
});
