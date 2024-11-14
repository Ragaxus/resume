const fs = require('node:fs');
const ejs = require('ejs');

let data = JSON.parse(fs.readFileSync('resume_data.json', 'utf8'));
data.dateUpdated = new Date().toISOString().replace(/T.*/, '');
const template_string = fs.readFileSync('template.ejs', 'utf8');
fs.writeFileSync('website/resume.html', ejs.render(template_string, data));
