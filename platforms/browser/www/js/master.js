//This is the master javascript file that should be loaded into every page.

window.onload = function(){
    var app = document.getElementById("app");
    app.style.opacity="1.0";
};

window.beforeunload = function(){ app.style.opacity="initial" };
