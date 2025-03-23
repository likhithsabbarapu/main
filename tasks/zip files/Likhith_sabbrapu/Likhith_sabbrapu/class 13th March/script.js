const works = {
    "task1" : { "title" : "Project 1", "url" : "works/task1/index.html" },
    "task2" : { "title" : "Project 2", "url" : "works/task2/index.html" },
    "task3" : { "title" : "Project 3", "url" : "works/task3/index.html" },
};

// Function to load the work title list into the navigation panel
function loadNavigation() {
    const navDiv = document.getElementById("nav_div");

    // Loop through the works object to create the list of titles
    for (const key in works) {
        const work = works[key];
        
        // Create a button for each work title
        const button = document.createElement("button");
        button.innerText = work.title;
        
        // Add an event listener to each button
        button.addEventListener("click", function() {
            loadPage(work.url);
        });

        // Append the button to the navigation div
        navDiv.appendChild(button);
    }
}

// Function to load the selected work's URL into the iframe
function loadPage(url) {
    const iframe = document.getElementById("content_frame");
    iframe.src = url;
}

// Call the loadNavigation function when the page loads
window.onload = loadNavigation;
