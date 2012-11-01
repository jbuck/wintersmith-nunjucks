var nunjucks = require("nunjucks");

module.exports = function(wintersmith, callback) {
  var NunjucksTemplate = function(template) {
    this.template = template;
  };

  NunjucksTemplate.prototype.render = function render(locals, callback) {
    try {
      callback(null, new Buffer(this.template.render(locals)));
    } catch (error) {
      callback(error);
    }
  };

  NunjucksTemplate.fromFile = function fromFile(filename, base, callback) {
    var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(base));
    callback(null, new NunjucksTemplate(env.getTemplate(filename)));
  };

  wintersmith.registerTemplatePlugin("**/*.*(html)", NunjucksTemplate);

  callback();
};
