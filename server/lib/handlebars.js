const exphbs  = require('express-handlebars');
const templates = require("../../views/inputs");
const Handlebars = require("handlebars");

const hbs = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        sheetBuilder: function (inputs) {
            var html = inputs.reduce(function (reduced, input) {
                reduced += templates[input.type](input);
                return reduced;
            }, "");

            return new Handlebars.SafeString(html);
        }
    }
});

module.exports = hbs;
