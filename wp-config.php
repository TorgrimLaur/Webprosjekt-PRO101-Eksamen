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
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'D:\Bitnami\apps\wordpress\htdocs\wp-content\plugins\wp-super-cache/' );
define('DB_NAME', 'bitnami_wordpress');

/** MySQL database username */
define('DB_USER', 'bn_wordpress');

/** MySQL database password */
define('DB_PASSWORD', '24fbff6125');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1:3307');

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
define('AUTH_KEY',         '7d3ea5641ee7ca7bd461b8758d5fd38a8f78771570f5f31194a632f6258c08a5');
define('SECURE_AUTH_KEY',  '30a5a114da309472c38c0571d07fdb25e86be84ca927272af2ea0b20fd4b07d4');
define('LOGGED_IN_KEY',    'e26614d18a9e14d3894517509c82afdfa48834257e2484202838941f6ac69c31');
define('NONCE_KEY',        '7939de92027c710ec98e0dbf30e9689d01221804614a62b491785c3d8119ffa1');
define('AUTH_SALT',        'cbffc3b9977241843889797e23bc5983595108fabcc4eba3c2a5acb13e424780');
define('SECURE_AUTH_SALT', '6adb7dc3a63e8e4da15062d8a14cb622a8c6c9fac088d61aedf50e0bd6e03361');
define('LOGGED_IN_SALT',   '86208c69af804994a9daa8cc60a426332723745b8327ea906a91469070f2183b');
define('NONCE_SALT',       '0288b1a843f5b95eae6081f1b0069608ac928211c162a2342ee4d00382bd00e9');

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

define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/wordpress');
define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/wordpress');


/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define('WP_TEMP_DIR', 'D:\Bitnami/apps/wordpress/tmp');



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
