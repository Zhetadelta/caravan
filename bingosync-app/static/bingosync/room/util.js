COLORS = ["blank", "red", "yellow", "green", "orange", "navy", "blue", "teal", "pink", "brown", "purple"];

function getSquareColorClass(color) {
    return color + "-square";
}

function getPlayerColorClass(color) {
    return color + "-player";
}

function getDisplayColor(color) {
    switch (color) {
        case "red": return "hornet";
        case "yellow": return "sherma";
        case "green": return "gilly";
        case "orange": return "vespa";
        case "navy": return "magnetite";
        case "blue": return "plasmium";
        case "teal": return "huntress";
        case "pink": return "beastling";
        case "brown": return "scrounge";
        case "purple": return "architect";
    }
    return color;
}

// global variables that are overwritten in bingosync.html main
var ROOM_SETTINGS = null;
var refreshBoard = function () {};
var hideBoard = function() {};
var revealBoard = function() {};

