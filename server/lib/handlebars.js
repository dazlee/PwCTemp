const logger = require("./logger");
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
const Handlebars = hbs.handlebars;
var templates = {};
Handlebars.registerHelper("compare", function (value1, value2, options) {
    if( value1 === value2 ) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper("in", function (value, array, options) {
    if( array.indexOf(value) >= 0 ) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper("isArray", function (item, options) {
    if(Array.isArray(item)) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper("sheetBuilder", function (inputs, title) {
    var html = inputs.reduce(function (reduced, input) {
        reduced += templates[input.type](input);
        return reduced;
    }, "");

    return new Handlebars.SafeString(html);
});
Handlebars.registerHelper("get", function (obj, key, options) {
    return options.fn(obj[key]);
});

// registering all input templates
fs.readdir(path.join(basePath, "views/inputs"), function(err, files) {
    files.forEach(function (file) {
        if (isHandlebarsFile(file)) {
            const filePath = path.join(basePath, "views/inputs", file);
            const baseName = path.basename(file, '.handlebars');
            fs.readFile(filePath, "utf8", function (error, data) {
                if (error) {
                    logger.error("Error when registering templates", error);
                    return;
                }
                Handlebars.registerPartial(baseName, data);
                templates[baseName] = Handlebars.compile(data);
            });
        }
    });
});

function isHandlebarsFile (filePath) {
    return path.extname(filePath) === ".handlebars";
}
