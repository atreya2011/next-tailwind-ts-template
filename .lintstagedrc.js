module.exports = {
  "**/*.{tsx,ts,jsx,js,json,md,css}": (filenames) => `npm run format-files ${filenames.join(" ")}`, // Run prettier on all staged files.
  "**/*.ts?(x)": (filenames) => `npm run type-check ${filenames.join(" ")}`, // Run type-check on changes to TypeScript files.
  "**/*.(ts|js)?(x)": (filenames) => `npm run lint-files ${filenames.join(" ")}`, // Run ESLint on changes to JavaScript/TypeScript files.
};
