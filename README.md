wintersmith-nunjucks
====================

[nunjucks](http://nunjucks.jlongster.com/) plugin for
[wintersmith](http://jnordberg.github.com/wintersmith/)

How to use
----------

1. Install globally using npm: `npm install -g wintersmith-nunjucks`
2. Add to your wintersmith config.json: `"plugins": ["wintersmith-nunjucks"]`
3. Create nunjucks templates ending in `.html`


How to add custom filters
---------------------------

Filters are small files stored in a filters directory. The filename has to be the name of the filter + '.js'.

so if your filter is in ./filters/myfirstfilter.js add a  nunjucks section like this to your config.json:

```javascript
"nunjucks": {  
    "filterdir": "filters",
    "filters": ["myfirstfilter"]
}```