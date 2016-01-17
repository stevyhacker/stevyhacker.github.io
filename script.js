//$(document).ready(function () {
//    just jquery test
//    $("h1").addClass("text-primary");
//});

function navigationItemClicked(id) {
    clearSelected();

    //id.innerHTML = "selected";
    id.style.setProperty("background-color", "#340c4a", "important");

}

function clearSelected() {
    var menuItems = document.getElementsByClassName("menu-items");

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].style.backgroundColor = "#4c4386";
    }

}