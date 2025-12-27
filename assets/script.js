// wait for document ready
document.addEventListener("DOMContentLoaded", function() {
    // replace .md-copyright html with my text
    document.querySelector('.md-copyright').innerHTML = "Derrick Lin © 2022";
    // on .md-copyright html change
    let target = document.querySelector('.md-copyright');
    let observer = new MutationObserver(function(mutations) {
        console.log(target.innerHTML);
        // target.innerHTML = "Derrick Lin © 2022";
    });
    observer.observe(target, { 
        attributes: true, childList: true, characterData: true, subtree: true, attributeOldValue: true, characterDataOldValue: true
    });
});
