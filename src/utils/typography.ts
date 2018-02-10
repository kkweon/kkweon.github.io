import theme from "typography-theme-bootstrap";
const Typography = require("typography");

theme.baseFontSize = "18px";
theme.bodyFontFamily.push("Spoqa Han Sans");
const typography = new Typography(theme);

export const rhythm = typography.rhythm;
export default typography;
