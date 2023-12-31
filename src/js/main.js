"use strict";

import {
  calculateBlocksFlexSpaces,
  calculateWatchesSideSpaces,
} from "./calculateCss.js";

/**
 * Changes the background of a menu item
 * and changes the text color
 * when a mouse hovers over the item's link
 *
 * @param {Object} event - The event object
 * @returns {void}
 */
function highlightMenuItem(event) {
  let menuItem = event.target;

  if (!menuItem.classList.contains("header-menu__menu-list-item")) {
    menuItem = event.target.parentElement;
  }

  const menuLink = menuItem.firstElementChild;

  menuItem.classList.toggle("highlighted");
  menuLink.classList.toggle("highlighted");
}

const menuElement = document.getElementsByClassName(
  "header-menu__menu-list"
)[0];

menuElement.addEventListener("mouseover", highlightMenuItem);
menuElement.addEventListener("mouseout", highlightMenuItem);
document.addEventListener("DOMContentLoaded", calculateBlocksFlexSpaces);
window.addEventListener("resize", calculateBlocksFlexSpaces);
document.addEventListener("DOMContentLoaded", calculateWatchesSideSpaces);
window.addEventListener("resize", calculateWatchesSideSpaces);
