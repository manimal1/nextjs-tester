const { gray } = require("tailwindcss/colors");

const colors = {
  primary: "rgb(var(--color-primary) / <alpha-value>)",
  "primary-focus": "rgb(var(--color-primary-focus) / <alpha-value>)",
  "primary-lighter": "rgb(var(--color-primary-lighter) / <alpha-value>)",
  "primary-light": "rgb(var(--color-primary-light) / <alpha-value>)",
  "primary-dark": "rgb(var(--color-primary-dark) / <alpha-value>)",
  "primary-darker": "rgb(var(--color-primary-darker) / <alpha-value>)",
  "primary-content": "rgb(var(--color-primary-content) / <alpha-value>)",
  secondary: "rgb(var(--color-secondary) / <alpha-value>)",
  "secondary-focus": "rgb(var(--color-secondary-focus) / <alpha-value>)",
  "secondary-content": "rgb(var(--color-secondary-content) / <alpha-value>)",
  tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
  "tertiary-content": "rgb(var(--color-tertiary-content) / <alpha-value>)",
  "heading-content": "rgb(var(--color-heading-content) / <alpha-value>)",
  "high-emphasis-content": "rgb(var(--color-high-emphasis-content) / <alpha-value>)",
  "base-neutral": "rgb(var(--color-base-neutral) / <alpha-value>)",
  "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
  "base-content-inverse": "rgb(var(--color-base-content-inverse) / <alpha-value>)",
  "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
  "base-200": "rgb(var(--color-base-200) / <alpha-value>)",
  "base-300": "rgb(var(--color-base-300) / <alpha-value>)",
  "base-400": "rgb(var(--color-base-400) / <alpha-value>)",
  error: "rgb(var(--color-error) / <alpha-value>)",
  info: "rgb(var(--color-info) / <alpha-value>)",
  link: "rgb(var(--color-link) / <alpha-value>)",
  warning: "rgb(var(--color-warning) / <alpha-value>)",
  success: "rgb(var(--color-success) / <alpha-value>)",
  gray: { ...gray, 850: "#18212f" },
};

module.exports = colors;
