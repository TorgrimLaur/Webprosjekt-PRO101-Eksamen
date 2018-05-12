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
define('DB_PASSWORD', 'wordpress123');

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
define('AUTH_KEY',         '429e4c98242878ad874cbc8f1197b89b74cb9b05185741c353f31524b12877cb');
define('SECURE_AUTH_KEY',  '6ad017c50a61873c2700077b65e66e720ee0a74a1fd7252541f8ae217236011c');
define('LOGGED_IN_KEY',    '241273f0509e9b55e02b713c0cbde8b4f5a8ae44ebe47eb3c4c817c56b5462cd');
define('NONCE_KEY',        'bad0e02db654a47ad28db9a9626b5f3e6f541d3f5acfbfcae3cd6d6d9bb2de78');
define('AUTH_SALT',        '42a8cb2c29c0b938768217879f0d12d545750f0d8d27d454e4fbef7b67ee2835');
define('SECURE_AUTH_SALT', '9ce8115e1a492d540ecf0d57dc157309f556affcae02435e44c89fdb31d919e4');
define('LOGGED_IN_SALT',   '143127b2cd68c9b7a3bc2ccc0bbcfe3211bf0e766ea71f10c6a3c2ba7a9ced8b');
define('NONCE_SALT',       '1a022d478f1a7e6bc6b078c5428d35f99ff61c1b8a8d7af4c493e1544867ffea');

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
