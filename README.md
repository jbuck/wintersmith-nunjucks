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

From the nunjucks documentation at http://jlongster.github.io/nunjucks/templating.html#filters:

>Filters are essentially functions that can be applied to variables. They are called with a pipe operator (|) and can take arguments.

For more information on how to write customer Filters, take a look at the API documentation page at: http://jlongster.github.io/nunjucks/api#custom-filters

To use customer filters with wintersmith, put the filter in its own file stored in a filters directory. The filename has to be the name of the filter + '.js'.

so if your filter is in './filters/myfirstfilter.js' add a  nunjucks section like this to your config.json:

```javascript
"nunjucks": {
    "filterdir": "filters",
    "filters": ["myfirstfilter"]
}
```

It will be available in your templates at 'myfirstfilter'


Filters that are already packaged in modules (like for example [nunjucks-date](https://www.npmjs.com/package/nunjucks-date)) can be loaded by specifying them like this in your config.json, if they export an [install-method](https://github.com/techmsi/nunjucks-date/blob/0b1996f643abadddb3fd68ff565c733742617438/index.js#L40):

```javascript
"nunjucks": {
    "filtermodules": "nunjucks-date"
}
```

this specific filter would then be available as `date` in your templates.

Autoescaping
------------

As of nunjucks 2.0.0 autoescaping was turned on by default. As of v1.0 this plugin also defaults to autoescaping turned on. If you want to change behaviour for pre-v1.0 compatibility you can control it with the autoescape option in your config.json.

```javascript
"nunjucks": {
    "autoescape": false
}
```

