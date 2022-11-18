<?php

// Get around direct access blockers.
if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/../../../');
}

define('GDI_ABOUT_ME_PATH', __DIR__ . '/../../../');
define('GDI_ABOUT_ME_URL', 'https://example.com/wp-content/plugins/' . 'modularity-gdi-modularity-my-pages-about-me');
define('GDI_ABOUT_ME_TEMPLATE_PATH', GDI_ABOUT_ME_PATH . 'templates/');


// Register the autoloader
$loader = require __DIR__ . '/../../../vendor/autoload.php';
$loader->addPsr4('GdiAboutMe\\Test\\', __DIR__ . '/../php/');

require_once __DIR__ . '/PluginTestCase.php';
