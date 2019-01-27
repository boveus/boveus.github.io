
var render = function (template, node) {
    node.innerHTML = template;
};

var underConstruction = "<div class='bg-orange-lightest border-l-4 border-orange text-orange-dark p-4' role='alert'> <p> This site is under construction.</p> </div>"


var alertTemplate = underConstruction;

render(alertTemplate, document.querySelector('#alert'));