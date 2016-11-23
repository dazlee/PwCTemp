const path = require("path");
const fs = require("fs");
const exphbs  = require('express-handlebars');

const projectConfig = require("../../project-config");
const basePath = projectConfig.basePath;

const hbs = exphbs.create({
    defaultLayout: 'main',
});

module.exports = hbs;

// initial handlebars
var Handlebars = hbs.handlebars;
var templates = {};
Handlebars.registerHelper("compare", function (value1, value2, options) {
    if( value1 === value2 ) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper("sheetBuilder", function (inputs, title) {
    var html = inputs.reduce(function (reduced, input) {
        reduced += templates[input.type](input);
        return reduced;
    }, "");

    const form = templates.form({
        title: title,
        body: new Handlebars.SafeString(html),
    });

    return new Handlebars.SafeString(form);
});


function isHandlebarsFile (filePath) {
    return path.extname(filePath) === ".handlebars";
}
// registering all input templates
fs.readdir(path.join(basePath, "views/inputs"), function(err, files) {
    files.forEach(function (file) {
        if (isHandlebarsFile(file)) {
            const filePath = path.join(basePath, "views/inputs", file);
            const baseName = path.basename(file, '.handlebars');
            fs.readFile(filePath, "utf8", function (error, data) {
                if (error) {
                    console.log(error);
                    return;
                }
                Handlebars.registerPartial(baseName, data);
                templates[baseName] = Handlebars.compile(data);
            });
        }
    });
});
