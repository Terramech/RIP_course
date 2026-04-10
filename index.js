// section for redirection code of wiki buttons


let wikiButtons = document.querySelectorAll('.wikiBtn');
wikiButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = 'categories.html';
    });
});
let returnButton = document.querySelector('.returnBtn');
returnButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});

// profile overlay code
let profileButton = document.getElementById('profileTrigger');
let profileOverlay = document.getElementById('profileOverlayBlock');
profileOverlay.addEventListener('click', function(event) {
    if (profileOverlay.classList.contains('active')) {
        profileOverlay.classList.remove('active');
    }
});
profileButton.addEventListener('click', function(event) {
    profileOverlay.classList.add('active');
    });




