// // Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
// ];

var topMenuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog',
        href: '#',
        subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders',
        href: '#',
        subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account',
        href: '#',
        subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

let mainL = document.querySelector(".mainE1")
mainL.classList.add("flex-ctr")

let menu = document.querySelector(".top-menuE1")
menu.classList.add("flex-around")

let sMenu = document.querySelector(".subMenuEl")
sMenu.classList.add("flex-around")


// Declare a global showingSubMenuvariable and initialize it to false
let showingSubMenu = false;

//Attach a delegated 'click' event listener to topMenuEl.

document.getElementById(".topMenuE1").addEventListener("click", function(event) {
    event.preventDefault()

})