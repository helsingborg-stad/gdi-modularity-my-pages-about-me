<?php

namespace GdiAboutMe\Modules\AboutMe;

use GdiAboutMe\Helper\CacheBust;

class AboutMe extends \Modularity\Module
{

	public $slug = 'mod-about-me';
	public $supports = array();

	public function init()
	{
		$this->nameSingular = __('About Me', GDI_ABOUT_ME_TEXT_DOMAIN);
		$this->namePlural = __('About Me', GDI_ABOUT_ME_TEXT_DOMAIN);
		$this->description = __('Modularity Module', GDI_ABOUT_ME_TEXT_DOMAIN);
	}

	public function data(): array
	{
		return [
			'aboutMeApiUri' => get_field('about_me_api_uri', 'options'),
			'labels' => [
				'email_label' 							=> get_field('labels_email_label', $this->ID)
					?: __('Email', GDI_ABOUT_ME_TEXT_DOMAIN),
				'phone_label' 							=> get_field('labels_phone_label', $this->ID)
					?: __('Phone', GDI_ABOUT_ME_TEXT_DOMAIN),
				'email_placeholder' 				=> get_field('labels_email_placeholder', $this->ID)
					?: __('Email', GDI_ABOUT_ME_TEXT_DOMAIN),
				'phone_placeholder' 				=> get_field('labels_phone_placeholder', $this->ID)
					?: __('Phone number', GDI_ABOUT_ME_TEXT_DOMAIN),
				'button_cancel' 						=> get_field('labels_button_cancel', $this->ID)
					?: __('Cancel', GDI_ABOUT_ME_TEXT_DOMAIN),
				'button_save' 							=> get_field('labels_button_save', $this->ID)
					?: __('Save', GDI_ABOUT_ME_TEXT_DOMAIN),
				'button_edit' 							=> get_field('labels_button_edit', $this->ID)
					?: __('Edit', GDI_ABOUT_ME_TEXT_DOMAIN),
				'phone_is_unverified' 			=> get_field('labels_phone_is_unverified', $this->ID)
					?: __('Your phone number is not verified.', GDI_ABOUT_ME_TEXT_DOMAIN),
				'email_is_unverified' 			=> get_field('labels_email_is_unverified', $this->ID)
					?: __('Your email is not verified.', GDI_ABOUT_ME_TEXT_DOMAIN),
				'application_error' 				=> get_field('labels_application_error', $this->ID)
					?: __('Something went wrong, please try again later', GDI_ABOUT_ME_TEXT_DOMAIN),
				'form_terms' 								=> get_field('form_terms', $this->ID) ?: '',
				'resend_verification_sms' 	=> get_field('labels_resend_verification_sms', $this->ID)
					?: __('Resend SMS', GDI_ABOUT_ME_TEXT_DOMAIN),
				'sent_verification_sms' 		=> get_field('labels_sent_verification_sms', $this->ID)
					?: __('Sent SMS to {phone}', GDI_ABOUT_ME_TEXT_DOMAIN),
				'resend_verification_email' 	=> get_field('labels_resend_verification_email', $this->ID)
					?: __('Resend mail', GDI_ABOUT_ME_TEXT_DOMAIN),
				'sent_verification_email' 	=> get_field('labels_sent_verification_email', $this->ID)
					?: __('Sent mail to {email}', GDI_ABOUT_ME_TEXT_DOMAIN),
			],
		];
	}

	public function template(): string
	{
		return 'about-me.blade.php';
	}

	public function script()
	{
		wp_enqueue_script(
			'gdi-modularity-about-me-js',
			GDI_ABOUT_ME_URL . '/dist/' . CacheBust::name('js/gdi-modularity-about-me.js'),
			null
		);
		wp_enqueue_style(
			'gdi-modularity-about-me-css',
			GDI_ABOUT_ME_URL . '/dist/' . CacheBust::name('js/gdi-modularity-about-me.css'),
			null
		);
	}
}
