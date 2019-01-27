var render = function (template, node) {
    node.innerHTML = template;
};

var headerTitle = "<h1 class='font-serif text-5xl pt-5 pl-5 pb-5'> <span class='bg-white opacity-75 pr-2 pl-2'> Brandon Stewart </span></h1>";
var mainHeaderBody = "<div class='container pl-2 ml-5 mr-5 bg-white opacity-75'> I am a software developer at Georgia State University.  I write code to enable librarians to make digitized library assets available to the public.  This is my website for blogging about various things. </div>";

var mainHeaderTemplate = headerTitle + mainHeaderBody;
var headerTemplate = headerTitle;

var mainHeader = document.getElementById("main-header");

if (mainHeader) {
    render(mainHeaderTemplate, document.querySelector('#main-header'));
} else {
    render(headerTemplate, document.querySelector('#header'));
}

