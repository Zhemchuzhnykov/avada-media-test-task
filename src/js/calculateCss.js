"use strict";

/**
 * Calculates the size of the bottom paddings for the titles and texts
 *
 * @returns {void}
 */
export function calculateBlocksFlexSpaces() {
  const titles = document.querySelectorAll(".js-title");

  titles.forEach((title) => {
    if (screen.width < 768) {
      return;
    }

    const titleParent = title.parentElement;
    const collectionBlock = title.closest(".js-block");
    const collectionBlockHeight = collectionBlock.offsetHeight;
    let denominator = 0.05;

    if (collectionBlockHeight < 750) {
      denominator = 0.09;
    }

    const titleBottomPadding = collectionBlockHeight * denominator;

    title.style.paddingBottom = titleBottomPadding + "px";
    title.style.marginBottom = titleBottomPadding + "px";
  });

  const texts = document.querySelectorAll(".js-text");

  texts.forEach((text) => {
    const collectionBlockHeight = text.closest(".js-text-block").offsetHeight;
    const textBottomMargin = collectionBlockHeight * 0.07;

    text.style.marginBottom = textBottomMargin + "px";
  });
}

/**
 * Calculates the size of the watch element based on the size of its container
 *
 * @returns {void}
 */
export function calculateWatchesSideSpaces() {
  const watchesContainers = document.querySelectorAll(".js-watches-container");

  watchesContainers.forEach((container) => {
    const blockWidth = container.closest(".js-block").offsetWidth;
    const watchContainerSideMargin = blockWidth * 0.05;

    container.style.marginRight = watchContainerSideMargin + "px";
    container.style.marginLeft = watchContainerSideMargin + "px";
  });
}
