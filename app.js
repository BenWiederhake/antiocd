"use strict";

function randomItem(itemMap) {
  let percentile = Math.random();
  for (let entry of itemMap) {
    if (percentile < entry[0]) {
      return entry[1];
    }
  }
  throw up;
}

// Last entry for each table MUST always be 1.

const fontFamilyTable = [
  [0.03, "ff-mo"],
  [0.10, "ff-se"],
  [1, "ff-sa"],
];
const fontSizeTable = [
  [0.01, "fs-p3"],
  [0.02, "fs-m3"],
  [0.04, "fs-p2"],
  [0.06, "fs-m2"],
  [0.10, "fs-p1"],
  [0.14, "fs-m1"],
  [1, "fs-noop"],
];
const fontWeightTable = [
  [0.02, "fw-bold"],
  [1, "fw-noop"],
];
const colorTable = [
  [0.001, "c-red"],
  [0.01, "c-black"],
  [0.03, "c-li1"],
  [0.05, "c-da1"],
  [0.07, "c-li2"],
  [0.09, "c-da2"],
  [0.13, "c-greensubtle"],
  [0.17, "c-graysubtle"],
  [1, "c-noop"],
];
const vertAlignTable = [
  [0.001, "va-middle"],
  [0.002, "va-sub"],
  [0.003, "va-super"],
  [0.004, "va-tebo"],
  [0.005, "va-teto"],
  [1, "va-noop"],
];

function randomizeStyles() {
  for (let span of document.getElementsByClassName("randomizeme")) {
    span.classList = "randomizeme";
    span.classList.add(randomItem(fontFamilyTable));
    span.classList.add(randomItem(fontSizeTable));
    span.classList.add(randomItem(fontWeightTable));
    span.classList.add(randomItem(colorTable));
    span.classList.add(randomItem(vertAlignTable));
  }
}

randomizeStyles();
