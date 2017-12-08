"use strict";

function hamburgerMenu() {
    var nav_toggle = document.getElementById('esls-site-nav-toggle-button');

    nav_toggle.addEventListener('click', function() {
        var target = document.getElementById('esls-site-nav');

        target.classList.toggle('esls-site-nav--is-open');
    });
}

function setActiveSiteNavLink() {
    var site_nav_link = document.querySelectorAll('.esls-site-nav__label--link');
    var currentUrl = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);
    var i;

    function checkCurrentUrl() {
        var thisLink;

        for (i = 0; i < site_nav_link.length; i++) {
            site_nav_link[i].classList.remove('esls-site-nav__label--link-is-active');
        }

        for (i = 0; i < site_nav_link.length; i++) {
            thisLink = site_nav_link[i].getAttribute('href').substr(site_nav_link[i].getAttribute('href').lastIndexOf('/') + 1);

            if (currentUrl === thisLink) {
                site_nav_link[i].classList.add('esls-site-nav__label--link-is-active');
            }
        }
    }

    for (i = 0; i < site_nav_link.length; i++) {
        checkCurrentUrl();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    hamburgerMenu();
    setActiveSiteNavLink();
});
