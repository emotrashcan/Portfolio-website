module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "color-hex-case": "lower", // Ensure hex colors are lowercase
    "indentation": 4, // Keeping 4 spaces as per your code
    "max-empty-lines": 1, // Allowing one empty line between blocks
    "block-closing-brace-newline-before": "always", // Newline before closing brace
    "no-eol-whitespace": true, // No trailing whitespace at the end of lines
    "declaration-block-no-duplicate-properties": true, // No duplicate properties
    "at-rule-no-unknown": [true, {
      ignoreAtRules: ["extends", "tailwind"]
    }],
    "property-no-unknown": [true, {
      ignoreProperties: ["composes"] // If using CSS Modules or similar
    }],
  },
};