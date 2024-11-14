const fs = require('node:fs');
const ejs = require('ejs');

let data = JSON.parse(fs.readFileSync('src/resume_data.json', 'utf8'));
data.dateUpdated = new Date().toISOString().replace(/T.*/, '');
const template_string = fs.readFileSync('src/template.ejs', 'utf8');
fs.writeFileSync('dist/resume/index.html', ejs.render(template_string, data));
