jQuery("[data-toggle=tooltip]").tooltip();
jQuery("[data-toggle=popover]").popover();

jQuery(document).ready(function () {
    $("#skill").select2({tags: ["css", "javaScript", "html", "Python", "Java", "c#"]});
});