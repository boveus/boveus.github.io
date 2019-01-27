var render = function (template, node) {
    node.innerHTML = template;
};

var linkedInUrl = "<a class='fa fa-linkedin footerbutton mr-2' href='https://www.linkedin.com/in/brandon-scott-stewart/'>";
var githubUrl = "<a class='fa fa-github footerbutton mr-2' href='https://github.com/boveus'>";
var email = "<a class='fa fa-envelope footerbutton mr-2' href='mailto:brandonsstewart88@gmail.com'>";
var footerTemplate = "<div class='mt-4'>" + linkedInUrl + githubUrl + email + "</div>";

render(footerTemplate, document.querySelector('#footer'));