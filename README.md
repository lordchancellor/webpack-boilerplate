# Webpack Boilerplate
A webpack 2 setup for ready-to-build development with JavaScript and Sass.

Current Webpack processes:
- Transpile ES2015+ into ES5 with Babel
- Generate unique JS files with a hash for cache prevention
- Generate index.html with script tags each time the JS hash changes
- HTML and JS for production deposited into a 'dist' folder

Just run ```npm install``` to get the latest dependencies and ```npm run build``` to get going.