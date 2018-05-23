<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sankar17_wordpress');

/** MySQL database username */
define('DB_USER', 'sankar17_word');

/** MySQL database password */
define('DB_PASSWORD', '!g8dFROXEHe0');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'dac0d0eb59791503b425c651d529678edae286d1060c2ee1d1ee2c51595f6d9d');
define('SECURE_AUTH_KEY',  '0bc5a43653a2d694781df195147adfaa0f8f10a926be0a36d4d63de140dec4a8');
define('LOGGED_IN_KEY',    'e7aeec4166e34c0298ba39bfa13717679734465f729d5e12326fcf436ac7dd8a');
define('NONCE_KEY',        '4028c695620e1a5d47f2268d09bbbdb121b4b9a1fbec988ec03c5abfec4619c3');
define('AUTH_SALT',        'a4a61a89cadeabef7e7a60b2e2fb79c4ec6a2c8ebb5dc243c3baebfd5e44e28a');
define('SECURE_AUTH_SALT', '3368ae397a7abeffac6b9047d56ba499b9ac97809eaa2eaa78ed605b0c982619');
define('LOGGED_IN_SALT',   '842dbf92fb0f550bca839348e9f632b3ff5f9ffeebbd4db6526d9ccb9d1baa11');
define('NONCE_SALT',       '0b2ce2ba0c27ff5fa0e72ebef185a94f08ad35b2dc5a9e1c33a208dfe91542da');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
*/

if ( defined( 'WP_CLI' ) ) {
    $_SERVER['HTTP_HOST'] = 'localhost';
}

//define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/wordpress');
//define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/wordpress');


/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

//define('WP_TEMP_DIR', 'D:\Program Files (x86)\bitnami/apps/wordpress/tmp');


//  Disable pingback.ping xmlrpc method to prevent Wordpress from participating in DDoS attacks
//  More info at: https://docs.bitnami.com/?page=apps&name=wordpress&section=how-to-re-enable-the-xml-rpc-pingback-feature

if ( !defined( 'WP_CLI' ) ) {
    // remove x-pingback HTTP header
    add_filter('wp_headers', function($headers) {
        unset($headers['X-Pingback']);
        return $headers;
    });
    // disable pingbacks
    add_filter( 'xmlrpc_methods', function( $methods ) {
            unset( $methods['pingback.ping'] );
            return $methods;
    });
    add_filter( 'auto_update_translation', '__return_false' );
}
