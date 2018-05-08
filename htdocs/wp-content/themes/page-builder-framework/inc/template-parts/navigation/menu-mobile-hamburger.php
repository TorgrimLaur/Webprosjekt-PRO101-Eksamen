<?php
/**
 * Mobile Menu - Hamburger
 *
 * @package Page Builder Framework
 * @subpackage Template Parts
 */
 
// exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

?>

<div class="wpbf-mobile-menu-hamburger wpbf-hidden-large">

	<div class="wpbf-mobile-nav-wrapper wpbf-container">
		
		<div class="wpbf-mobile-logo-container wpbf-2-3">

			<?php get_template_part( 'inc/template-parts/logo/logo-mobile' ); ?>

		</div>

		<div class="wpbf-menu-toggle-container wpbf-1-3">

			<i class="wpbf-mobile-menu-toggle wpbff wpbff-hamburger" aria-hidden="true"></i>

		</div>

	</div>

	<div class="wpbf-mobile-menu-container">

		<nav itemscope itemtype="http://schema.org/SiteNavigationElement">

			<?php wp_nav_menu(array(
				'theme_location'	=>		'mobile_menu',
				'container'			=>		false,
				'menu_class'		=>		'wpbf-mobile-menu',
				'depth'				=>		'3',
				'fallback_cb'		=>		'wpbf_menu_fallback'
			)); ?>

		</nav>

	</div>

</div>