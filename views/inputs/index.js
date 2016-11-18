const fs = require("fs");
const path = require("path");
const Handlebars = require('handlebars');

const config = require("../../project-config");
const basePath = config.basePath;

function isHandleBarsFile (filePath) {
    return path.extname(filePath) === ".handlebars";
}

var templates = {};
// registering all input templates
fs.readdir("./views/inputs", function(err, files) {
    files.forEach(function (file) {
        if (isHandleBarsFile(file)) {
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

module.exports = templates;
