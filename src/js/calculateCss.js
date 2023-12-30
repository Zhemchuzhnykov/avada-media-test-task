"use strict";

/**
 * Calculates the size of the bottom paddings for the titles and texts
 *
 * @param {object} event - The object of the event of the screen size change
 * @returns {void}
 */
export default function () {
  const titles = document.querySelectorAll(".js-title");

  titles.forEach((title) => {
    const collectionBlock = title.closest(".js-collection");
    const collectionBlockHeight = collectionBlock.offsetHeight;
    let denominator = 0.05;

    if (collectionBlock.classList.contains("collection-21-22")) {
      denominator = 0.08;
    }

    const titleBottomPadding = collectionBlockHeight * denominator;

    title.style.paddingBottom = titleBottomPadding + "px";
    title.style.marginBottom = titleBottomPadding + "px";
  });

  const texts = document.querySelectorAll(".js-text");

  texts.forEach((text) => {
    const collectionBlockHeight = text.closest(".js-collection").offsetHeight;
    const textBottomMargin = collectionBlockHeight * 0.07;

    text.style.marginBottom = textBottomMargin + "px";
  });
}
