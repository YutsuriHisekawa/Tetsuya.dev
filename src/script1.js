document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 74 || event.keyCode == 67)) || 
        (event.ctrlKey && event.keyCode == 85) || 
        event.keyCode == 123) {
        event.preventDefault();
    }
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});
