let mix = require('laravel-mix');

mix.sass('src/scss/master.scss', 'dist/css/')
.js('src/main.js', 'dist/js/')
    .options({
		processCssUrls: false
	});