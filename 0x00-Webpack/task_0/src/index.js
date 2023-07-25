import $ from "jquery";

function addParagraphs() {
    const paragraphs = [
        'Holberton Dashboard',
        'Dashboard data for the students',
        'Copyright - Holberton School',
    ];

    paragraphs.forEach(element => {
        $('body').append('<p>' + element + '</p>');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addParagraphs();
});
