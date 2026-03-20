// section for redirection code of wiki buttons


let wikiButtons = document.querySelectorAll('.wikiBtn');
wikiButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = 'categories.html';
    });
});


