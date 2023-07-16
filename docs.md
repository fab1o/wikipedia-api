## Modules

<dl>
<dt><a href="#module_wikipediaApi">wikipediaApi</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#ArticleApi">ArticleApi</a></dt>
<dd></dd>
<dt><a href="#MostViewedApi">MostViewedApi</a></dt>
<dd></dd>
</dl>

<a name="module_wikipediaApi"></a>

## wikipediaApi
<a name="module_wikipediaApi..wikipediaApi"></a>

### wikipediaApi~wikipediaApi : <code>Object</code>
**Kind**: inner typedef of [<code>wikipediaApi</code>](#module_wikipediaApi)  
**Access**: public  
**Version**: 0.0.1  
**Properties**

| Name | Type |
| --- | --- |
| ArticleApi | [<code>ArticleApi</code>](#ArticleApi) | 
| MostViewedApi | [<code>MostViewedApi</code>](#MostViewedApi) | 
| Month | [<code>Month</code>](#Month) | 

<a name="ArticleApi"></a>

## ArticleApi
**Kind**: global class  
**Access**: public  
**See**: https://wikitech.wikimedia.org/wiki/Analytics/AQS/Pageviews#Pageview_counts_by_article  
**Version**: 0.0.1  

* [ArticleApi](#ArticleApi)
    * [new ArticleApi(article)](#new_ArticleApi_new)
    * [.getViewCountByDate(startDate, endDate)](#ArticleApi+getViewCountByDate) ⇒ <code>Number</code>
    * [.getViewCountByWeek(week, year)](#ArticleApi+getViewCountByWeek) ⇒ <code>Number</code>
    * [.getViewCountByMonth(month, year)](#ArticleApi+getViewCountByMonth) ⇒ <code>Number</code>
    * [.getMostViewsMonthDay(month, year)](#ArticleApi+getMostViewsMonthDay) ⇒ <code>Number</code>

<a name="new_ArticleApi_new"></a>

### new ArticleApi(article)
Retrieves information about an article.


| Param | Type | Description |
| --- | --- | --- |
| article | <code>String</code> | Article title. |

<a name="ArticleApi+getViewCountByDate"></a>

### articleApi.getViewCountByDate(startDate, endDate) ⇒ <code>Number</code>
Gets the view count of a specific article between two dates.

**Kind**: instance method of [<code>ArticleApi</code>](#ArticleApi)  
**Returns**: <code>Number</code> - Total view count.  
**Throws**:

- <code>Error</code> 

**Access**: public  
**Version**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| startDate | <code>Date</code> | Start date. |
| endDate | <code>Date</code> | End date. |

<a name="ArticleApi+getViewCountByWeek"></a>

### articleApi.getViewCountByWeek(week, year) ⇒ <code>Number</code>
Gets the view count of a specific article for a week.

**Kind**: instance method of [<code>ArticleApi</code>](#ArticleApi)  
**Throws**:

- <code>Error</code> 

**Access**: public  
**Version**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| week | <code>Number</code> | Number representing the week of the year, from 1 to 52. |
| year | <code>Number</code> | Number representing the year, ie: 2023. |

<a name="ArticleApi+getViewCountByMonth"></a>

### articleApi.getViewCountByMonth(month, year) ⇒ <code>Number</code>
Gets the view count of a specific article for a month.

**Kind**: instance method of [<code>ArticleApi</code>](#ArticleApi)  
**Returns**: <code>Number</code> - Total view count.  
**Throws**:

- <code>Error</code> 

**Access**: public  
**Version**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| month | [<code>Month</code>](#Month) | Number representing the month, from 0 to 11. |
| year | <code>Number</code> | Number representing the year, ie: 2023. |

<a name="ArticleApi+getMostViewsMonthDay"></a>

### articleApi.getMostViewsMonthDay(month, year) ⇒ <code>Number</code>
Gets the day of the month where an article got the most page views.

**Kind**: instance method of [<code>ArticleApi</code>](#ArticleApi)  
**Returns**: <code>Number</code> - Number representing a day of the month.  
**Throws**:

- <code>Error</code> 

**Access**: public  
**Version**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| month | [<code>Month</code>](#Month) | Number representing the month, from 0 to 11. |
| year | <code>Number</code> | Number representing the year, ie: 2023. |

<a name="MostViewedApi"></a>

## MostViewedApi
**Kind**: global class  
**Access**: public  
**See**: https://wikitech.wikimedia.org/wiki/Analytics/AQS/Pageviews#Most_viewed_articles  
**Version**: 0.0.1  

* [MostViewedApi](#MostViewedApi)
    * [new MostViewedApi()](#new_MostViewedApi_new)
    * [.getMostViewedByDay(date)](#MostViewedApi+getMostViewedByDay) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.getMostViewedByWeek(week, year)](#MostViewedApi+getMostViewedByWeek) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.getMostViewedByMonth(month, year)](#MostViewedApi+getMostViewedByMonth) ⇒ <code>Array.&lt;Object&gt;</code>

<a name="new_MostViewedApi_new"></a>

### new MostViewedApi()
Retrieves lists of most viewed articles.

<a name="MostViewedApi+getMostViewedByDay"></a>

### mostViewedApi.getMostViewedByDay(date) ⇒ <code>Array.&lt;Object&gt;</code>
Retrieves a list of the most viewed articles for a day.

**Kind**: instance method of [<code>MostViewedApi</code>](#MostViewedApi)  
**Returns**: <code>Array.&lt;Object&gt;</code> - List of Articles.  
**Throws**:

- <code>Error</code> 

**Access**: public  
**Version**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | Date to look up. |

<a name="MostViewedApi+getMostViewedByWeek"></a>

### mostViewedApi.getMostViewedByWeek(week, year) ⇒ <code>Array.&lt;Object&gt;</code>
Retrieves a list of the most viewed articles for a week.

**Kind**: instance method of [<code>MostViewedApi</code>](#MostViewedApi)  
**Returns**: <code>Array.&lt;Object&gt;</code> - List of Articles.  
**Throws**:

- <code>Error</code> 

**Access**: public  
**Version**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| week | <code>Number</code> | Number representing the week of the year, from 1 to 52. |
| year | <code>Number</code> | Number representing the year, ie: 2023. |

<a name="MostViewedApi+getMostViewedByMonth"></a>

### mostViewedApi.getMostViewedByMonth(month, year) ⇒ <code>Array.&lt;Object&gt;</code>
Retrieves a list of the most viewed articles for a month.

**Kind**: instance method of [<code>MostViewedApi</code>](#MostViewedApi)  
**Returns**: <code>Array.&lt;Object&gt;</code> - List of Articles.  
**Throws**:

- <code>Error</code> 

**Access**: public  
**Version**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| month | [<code>Number.&lt;Month&gt;</code>](#Month) | Number representing the month, from 0 to 11. |
| year | <code>Number</code> | Number representing the year, ie: 2023. |

<a name="Month"></a>

## Month
**Kind**: global enum  
**Access**: public  
**Version**: 0.0.1  
**Properties**

| Name | Default |
| --- | --- |
| January | <code>0</code> | 
| February | <code>1</code> | 
| March | <code>2</code> | 
| April | <code>3</code> | 
| May | <code>4</code> | 
| June | <code>5</code> | 
| July | <code>6</code> | 
| August | <code>7</code> | 
| September | <code>8</code> | 
| October | <code>9</code> | 
| November | <code>10</code> | 
| December | <code>11</code> | 

