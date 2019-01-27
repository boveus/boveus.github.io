var render = function (template, node) {
    node.innerHTML = template;
};

var tailwind = "<link href='https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css' rel='stylesheet'>";
var fontAwesome = "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'>";
var customStyles = "<link href='/stylesheets/home.css' rel='stylesheet'>";
var title = "<title> Brandon's Webpage </title>";

var headTemplate = tailwind + fontAwesome + customStyles + title;

render(headTemplate, document.querySelector('#head'));