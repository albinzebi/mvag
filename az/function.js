/*
document.addEventListener('DOMContentLoaded', function () {
    const titleAttribute = document.querySelector('.myProjects');
    const newAttribute = document.createAttribute('title')
    newAttribute.value = 'Click here to open the project in a new tab';
    titleAttribute.setAttributeNode(newAttribute);
});
*/

/*
document.querySelectorAll('.myProjects').forEach( function () {
    const titleAttribute = document.querySelector('.myProjects');
    const newAttribute = document.createAttribute('title')
    newAttribute.value = 'Click here to open the project in a new tab';
    titleAttribute.setAttributeNode(newAttribute);
});
*/


const titleAttribute = document.querySelector('.myProjects');
titleAttribute.setAttribute('title', 'Click here to open the project in a new tab');