const menu = document.querySelector('#mobile-menu'); // initializing a const variable
// document represents the web page. Here it helps accessing the webpage
// querySelector () is a method, it helps finding the first element that matches a css selector
// in this case the querySelector () method finds the #mobile-menu id and pass it to the const variable 'menu'

const menuLinks = document.querySelector('.navbar-menu'); // initializing another const variable
// the css class '.navbar-menu' is found by the querySelector() method by accessing the web page with document and is passed to the variable 'menuLinks'

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
// We create an anonymous function and pass it to a new const variable 'mobileMenu' since we refer this function to the css selector '#mobile-menu'
// classList returns the class, here it is 'is-active'
// the toggle() method switches the class on or off
// Here we toggle two classes on 'is-active' and 'active'
// This function comes into play since the condition is true that the width of the html page is not bigger than 960px as declared in the @media-query in our style.css stylesheet

menu.addEventListener('click', mobileMenu);
// The addEventListener() method adds an 'EVENT' i.e. a click to an element like a function or variable
// here the mobile-menu id which refers to the hamburger menu will be activated when you click on this menu