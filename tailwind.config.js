/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,svelte}',
    // Scanning a large number of files, leading to performance degradation
    './node_modules/**/*.js',
  ],
};
