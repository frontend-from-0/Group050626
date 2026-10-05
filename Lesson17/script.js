const mainHeading = document.getElementById('mainHeading');
console.log(mainHeading);

const textSecondaryElements = document.getElementsByClassName('textSecondary');
console.log(textSecondaryElements);

const h2Elements = document.getElementsByTagName('h2');
console.log(h2Elements);

const listItem = document.querySelector('ol > li');
console.log(listItem);

const listItems = document.querySelectorAll('ol > li');
console.log(listItems);

const closest = listItem.closest('div');
console.log(closest);

const parentOfListItem = listItem.parentNode;
console.log(parentOfListItem);

const childrenOfMain = document.querySelector('main').children;
console.log(childrenOfMain);

const secondaryPararaph = document.querySelector('p.textSecondary');

const prevSiblingOfSecondaryParagraph = secondaryPararaph.previousElementSibling;
console.log(prevSiblingOfSecondaryParagraph);

const nextSibling = secondaryPararaph.nextElementSibling;
console.log(nextSibling);