var nunjucks = require("nunjucks");

module.exports = function(env, callback) {
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

  NunjucksTemplate.fromFile = function fromFile(filepath, callback) {
    var nenv = new nunjucks.Environment(new nunjucks.FileSystemLoader(env.templatesPath));
    callback(null, new NunjucksTemplate(nenv.getTemplate(filepath.relative)));
  };

  env.registerTemplatePlugin("**/*.*(html)", NunjucksTemplate);

  callback();
};
