<?php

/**
 * Plugin Name:       GDI Modularity My Pages About Me
 * Plugin URI:        https://github.com/nramstedt/gdi-modularity-my-pages-about-me
 * Description:       About me module
 * Version: 2.0.0
 * Author:            Nikolas Ramstedt @ Helsingborg Stad
 * Author URI:        https://github.com/helsingborg-stad
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       gdi-modularity-my-pages-about-me
 * Domain Path:       /languages
 */

// Protect agains direct file access
if (!defined('WPINC')) {
    die;
}

define('GDI_ABOUT_ME_PATH', plugin_dir_path(__FILE__));
define('GDI_ABOUT_ME_URL', plugins_url('', __FILE__));
define('GDI_ABOUT_ME_TEMPLATE_PATH', GDI_ABOUT_ME_PATH . 'templates/');
define('GDI_ABOUT_ME_TEXT_DOMAIN', 'gdi-modularity-my-pages-about-me');
define('GDI_ABOUT_ME_MODULE_PATH', GDI_ABOUT_ME_PATH . 'source/php/Modules/');

load_plugin_textdomain(GDI_ABOUT_ME_TEXT_DOMAIN, false, plugin_basename(dirname(__FILE__)) . '/languages');

require_once GDI_ABOUT_ME_PATH . 'Public.php';

// Register the autoloader
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
}

// Acf auto import and export
add_action('acf/init', function () {
    $acfExportManager = new \AcfExportManager\AcfExportManager();
    $acfExportManager->setTextdomain('gdi-modularity-my-pages-about-me');
    $acfExportManager->setExportFolder(GDI_ABOUT_ME_PATH . 'source/php/AcfFields/');
    $acfExportManager->autoExport(array(
        'about-me-options'          => 'group_637368ed99a9a',
        'about-me-module-settings'  => 'group_63872d9248a82',
    ));
    $acfExportManager->import();
});

// Start application
new GdiAboutMe\App();
