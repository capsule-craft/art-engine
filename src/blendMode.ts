"use strict";

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'MODE'.
const MODE = {
  sourceOver: "source-over",
  sourceIn: "source-in",
  sourceOut: "source-out",
  sourceAtop: "source-atop",
  destinationOver: "destination-over",
  destinationIn: "destination-in",
  destinationOut: "destination-out",
  destinationAtop: "destination-atop",
  lighter: "lighter",
  copy: "copy",
  xor: "xor",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  colorDodge: "color-dodge",
  colorBurn: "color-burn",
  hardLight: "hard-light",
  softLight: "soft-light",
  difference: "difference",
  exclusion: "exclusion",
  hue: "hue",
  saturation: "saturation",
  color: "color",
  luminosity: "luminosity",
};

// @ts-expect-error TS(2552): Cannot find name 'module'. Did you mean 'MODE'?
module.exports = {
  MODE,
};
