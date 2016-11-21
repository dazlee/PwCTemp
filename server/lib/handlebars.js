const exphbs  = require('express-handlebars');
const templates = require("../../views/inputs");
const Handlebars = require("handlebars");

const hbs = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        sheetBuilder: function (inputs, title) {
            var html = inputs.reduce(function (reduced, input) {
                reduced += templates[input.type](input);
                return reduced;
            }, "");

            const form = templates.form({
                title: title,
                body: new Handlebars.SafeString(html),
            });

            return new Handlebars.SafeString(form);
        },
        compare: function (value, item, options) {
            if( value === item.value ) {
                return options.fn(this);
            }
            return options.inverse(this);
        },
    }
});

module.exports = hbs;
