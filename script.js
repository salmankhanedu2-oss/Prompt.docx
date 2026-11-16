
/*
    Website Project: Deja & Brew Cafe
    Student Name: Salman Khan
    Roll Number: 26I3141
*/

// Function to switch between pages

function showPage(pageName) {

    // Select all website pages

    let pages = document.querySelectorAll(".page");

    // Hide all pages

    pages.forEach(function(page) {

        page.classList.remove("active");

    });

    // Show the selected page

    document.getElementById(pageName)
            .classList.add("active");

}

// Display welcome message when website opens

window.onload = function() {

    alert("Welcome to Deja & Brew Cafe!");

};
