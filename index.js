//== 
    //  code of wiki redirection buttons
//==
try {
    let wikiButtons = document.querySelectorAll('.wikiBtn');
    wikiButtons.forEach(function(button) {
        button.addEventListener('click', () => {
            if (!window.location.href.includes('categories.html')) {
                window.location.href = 'categories.html';
            } 
        });
    });

    let returnButton = document.querySelectorAll(".returnBtn")
    returnButton.forEach(function(button) {
        button.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    });

    let characterPageRedir = document.querySelector(".characterPage")
    if (characterPageRedir) {
        characterPageRedir.addEventListener("click", (e) => {
        window.location.href = "wikipages/characterPage.html"
    })
    let gamemodePageRedir = document.querySelector(".gamemodesPage")
    gamemodePageRedir.addEventListener("click", (e) => {
        window.location.href = "wikipages/gamemodes.html"
    })
    }
    

//==
    // profile overlay code
//==

    let profileButton = document.getElementById('profileTrigger');
    let profileOverlay = document.getElementById('profileOverlayCont');
    profileOverlay.addEventListener('click', (e) => {
        if (profileOverlay.classList.contains('active')) {
            profileOverlay.classList.remove('active');
        }
    });
    profileButton.addEventListener('click', (e) => {
        profileOverlay.classList.add('active');
    });

} catch (error) {
    console.log(error)
}



