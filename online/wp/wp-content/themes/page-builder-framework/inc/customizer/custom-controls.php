<?php
/**
 * Custom Controls
 *
 * Custom Customizer Controls
 *
 * @package Page Builder Framework
 */

// exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

// Custom Typography Control
if( class_exists( 'WP_Customize_Control' ) ):

	class WPBF_Customize_Font_Size_Control extends WP_Customize_Control {
		public $type = 'wpbf-responsive-font-size';

		public function enqueue() {
			wp_enqueue_script( 'wpbf-customizer-controls', WPBF_THEME_URI . '/inc/customizer/js/wpbf-customizer-controls.js', array( 'jquery' ), false, true );
			wp_enqueue_style( 'wpbf-customizer-controls', WPBF_THEME_URI . '/inc/customizer/css/wpbf-customizer-controls.css' );
		}

		public function render_content() {

			$devices = array( 'desktop', 'tablet', 'mobile' ); ?>

			<span class="customize-control-title"><?php _e( 'Font Size', 'page-builder-framework' ); // WPCS: XSS ok. ?></span>

			<ul class="wpbf-responsive-options">
				<li class="desktop">
					<button type="button" class="preview-desktop active" data-device="desktop">
						<i class="dashicons dashicons-desktop"></i>
					</button>
				</li>
				<li class="tablet">
					<button type="button" class="preview-tablet" data-device="tablet">
						<i class="dashicons dashicons-tablet"></i>
					</button>
				</li>
				<li class="mobile">
					<button type="button" class="preview-mobile" data-device="mobile">
						<i class="dashicons dashicons-smartphone"></i>
					</button>
				</li>
			</ul>

			<?php foreach ($devices as $device) { ?>

			<div class="wpbf-control-<?php echo esc_attr( $device ); ?>">

				<?php $link = $this->get_link() ?>

				<?php $link = str_replace( 'mobile', $device, $link ); ?>

				<?php $link = str_replace( '"', '', $link ); ?>

				<label>

					<input type="text" <?php echo esc_html( $link ); ?> value="<?php echo esc_textarea( $this->value() ); ?>">

				</label>

			</div>
				
			<?php } ?>

		<?php }

	}

	class WPBF_Customize_Padding_Control extends WP_Customize_Control {
		public $type = 'wpbf-padding';

		public function enqueue() {
			wp_enqueue_script( 'wpbf-customizer-controls', WPBF_THEME_URI . '/inc/customizer/js/wpbf-customizer-controls.js', array( 'jquery' ), false, true );
			wp_enqueue_style( 'wpbf-customizer-controls', WPBF_THEME_URI . '/inc/customizer/css/wpbf-customizer-controls.css' );
		}

		public function render_content() {

			$areas = array( 'top', 'right', 'bottom', 'left' ); ?>

			<span class="customize-control-title"><?php _e( 'Padding', 'page-builder-framework' ); // WPCS: XSS ok. ?></span>

			<?php foreach ( $areas as $area ) { ?>

			<div class="wpbf-control-padding-<?php echo esc_attr( $area ); ?>">

				<?php $link = $this->get_link() ?>

				<?php $link = str_replace( 'left', $area, $link ); ?>

				<?php $link = str_replace( '"', '', $link ); ?>

				<label>

					<input style="text-align:center;" type="text" <?php echo esc_attr( $link ) ?> value="<?php echo esc_textarea( $this->value() ); ?>">
					<small><?php echo esc_attr( ucfirst( $area ) ); ?></small>

				</label>

			</div>
				
			<?php } ?>

			<span class="px">px</span>

		<?php }

	}

endif;