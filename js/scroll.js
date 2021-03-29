document.addEventListener('DOMContentLoaded', function() {
    const scrollProgress = document.querySelector("#scrollProgress");
    const navBar = document.querySelector("nav");
    const navBarHeight = 88; // 5.5rem

    function ResizeNavbar(scrollPos) {
        if(scrollPos > navBarHeight) { 
            navBar.classList.add("small"); 
            scrollProgress.classList.add("small"); 
        }
        else {
            navBar.classList.remove("small"); 
            scrollProgress.classList.remove("small"); 
        }
    }

    function MoveProgressBar(scrollPercentRounded) {
        scrollProgress.style.width = `${scrollPercentRounded}%`;
    }

    window.addEventListener('scroll', function(e) {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
      
        ResizeNavbar(scrollTop);
        MoveProgressBar(scrollPercentRounded);
    });
});
