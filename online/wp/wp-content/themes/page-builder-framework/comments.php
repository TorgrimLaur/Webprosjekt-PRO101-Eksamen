<?php
/**
 * Comments Template
 *
 * @package Page Builder Framework
 */
 
// exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

// don't load it if you can't comment
if ( post_password_required() )	return;

if ( have_comments() ) : ?>

	<section class="commentlist">

		<h3 id="comments-title"><?php comments_number( __( '<span>No</span> Comments', 'page-builder-framework' ), __( '<span>One</span> Comment', 'page-builder-framework' ), __( '<span>%</span> Comments', 'page-builder-framework' ) );?></h3>

		<ul>

			<?php
				wp_list_comments( array(
					'avatar_size'	=>		80,
					'callback'		=>		'wpbf_comments',
					'reply_text'	=>		__( 'Reply', 'page-builder-framework' ),
				) );
			?>
			
		</ul>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
		<nav class="wpbf-container wpbf-comment-nav">
			<div class="previous"><?php previous_comments_link( __( '&larr; Older Comments', 'page-builder-framework' ) ); ?></div>
			<div class="next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'page-builder-framework' ) ); ?></div>
		</nav>
		<?php endif; ?>

	</section>

	<?php if ( ! comments_open() ) : ?>
	<p class="no-comments"><?php _e( 'Comments are closed.' , 'page-builder-framework' ); // WPCS: XSS ok. ?></p>
	<?php endif; ?>

<?php endif; ?>

<?php

$args = array(
	'title_reply'          => apply_filters( 'wpbf_leave_comment', __( 'Leave a Comment', 'page-builder-framework' ) ),
	/* translators: 1: comment title */
	'title_reply_to'       => apply_filters( 'wpbf_leave_reply', __( 'Leave a Reply to %s', 'page-builder-framework' ) ),
	'cancel_reply_link'    => apply_filters( 'wpbf_cancel_reply', __( 'Cancel reply', 'page-builder-framework' ) ),
	'label_submit'         => apply_filters( 'wpbf_post_comment', __( 'Post Comment', 'page-builder-framework' ) ),
);

comment_form( $args );

?>