var hhspike = hhspike || {};
hhspike.models = hhspike.models || {};
hhspike.templates = handlebars.templates;

// configure
Handlebars.registerHelper(':', function(context, options) {

  console.log(": helper called!");
  console.log(context);
  console.log(options);

  return new Handlebars.SafeString(
      '<span class="">'
      + options.fn(this)
      + '</span>');
});
