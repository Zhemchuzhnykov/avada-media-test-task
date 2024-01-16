"use strict";

import {
  titleSpaces,
  watchesContainerSideSpaces,
} from "./configs/titleSpacesConfig.js";

/**
 * Calculates the size of the bottom paddings for the titles and texts
 *
 * @returns {void}
 */
export function calculateBlocksFlexSpaces() {
  const titles = document.querySelectorAll(".js-title");
  const titleBlocksClasses = Object.keys(titleSpaces);

  titles.forEach((title) => {
    if (screen.width < 768) {
      return;
    }

    const collectionBlock = title.closest(".js-block");
    const collectionBlockClasses = [...collectionBlock.classList];
    const blockSpecificClass = titleBlocksClasses.find((cLass) =>
      collectionBlockClasses.includes(cLass)
    );
    const denominator = titleSpaces[blockSpecificClass];
    const collectionBlockHeight = collectionBlock.offsetHeight;
    const titleBottomPadding = collectionBlockHeight * denominator;
    const titleBottomMargin = collectionBlockHeight * (denominator + 0.01);

    title.style.paddingBottom = titleBottomPadding + "px";
    title.style.marginBottom = titleBottomMargin + "px";
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
  const watchesContainerBlocksClasses = Object.keys(watchesContainerSideSpaces);

  watchesContainers.forEach((container) => {
    const watchesContainerBlock = container.closest(".js-block");
    const blockWidth = watchesContainerBlock.offsetWidth;
    const watchesContainerBlockClasses = [...watchesContainerBlock.classList];
    const blockSpecificClass = watchesContainerBlocksClasses.find((cLass) =>
      watchesContainerBlockClasses.includes(cLass)
    );
    const { leftMarginDenominator, rightMarginDenominator } =
      watchesContainerSideSpaces[blockSpecificClass];
    const watchContainerLeftMargin = blockWidth * leftMarginDenominator;
    const watchContainerRightMargin = blockWidth * rightMarginDenominator;

    container.style.marginRight = watchContainerRightMargin + "px";
    container.style.marginLeft = watchContainerLeftMargin + "px";
  });
}
