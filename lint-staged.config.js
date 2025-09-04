export default {
  '*.{js,ts,tsx,jsx}': (files) => [
    `eslint --fix ${files.join(' ')}`,
    `prettier --write ${files.join(' ')}`,
  ],
  '*.{css,scss,less}': (files) => [
    `stylelint --fix ${files.join(' ')}`,
    `prettier --write ${files.join(' ')}`,
  ],
  '*.{json,md,yml,yaml}': (files) => [`prettier --write ${files.join(' ')}`],
};
