document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50, // Speed of typing
        backSpeed: 25, // Speed of backspacing
        backDelay: 1000, // Delay before backspacing
        startDelay: 500, // Delay before starting
        loop: true, // Infinite loop
        loopCount: Infinity, // Number of times to loop
        showCursor: true, // Show cursor
        cursorChar: '|', // Character for cursor
        autoInsertCss: true, // Automatically insert CSS for cursor and fade
        contentType: 'html' // Type HTML support
    });
});