const mix = require('laravel-mix');
require('dotenv').config();

// JS
mix.combine([
    'src/js/main.js'
], 'assets/js/main.js');

// Sass
mix.sass('src/styles/main.scss', 'assets/css').options({
    processCssUrls: false
});

// Disable notifications
mix.disableNotifications();
