# Webpack Boilerplate
A webpack 2 setup for ready-to-build development with JavaScript and Sass.

Current Webpack processes:
- Transpile ES2015+ into ES5 with Babel
- Minify JS & CSS
- Generate unique JS files with a hash for cache prevention
- Generate index.html with script tags each time the JS hash changes
- Linting of JavaScript during build process with ESLint
- HTML and JS for production deposited into a 'dist' folder
- Sass compilation to CSS and auto-insertion of script tags
- Webpack Development Server served to port 3500

Work out of the src folder and go live with the dist folder.

Just run ```npm install``` to get the latest dependencies and ```npm run build``` to get going, or ```npm run serve``` to use Webpack Development Server on localhost:3500.