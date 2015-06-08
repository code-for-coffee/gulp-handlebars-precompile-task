var hhspike = hhspike || {};
hhspike.models = hhspike.models || {};
hhspike.templates = handlebars.templates;
hhpsike.dom = document.getElementById("body");

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

hhspike.dom.innerHTML = "test";
