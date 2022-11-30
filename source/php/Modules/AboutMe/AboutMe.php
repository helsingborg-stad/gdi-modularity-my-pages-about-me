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
			'aboutMeGraphQLUri' => get_field('about_me_api_uri', 'options') . '/graphql',
			'labels' => [
				'email_label' 				=> get_field('email_label', $this->ID)
					?? __('Email', GDI_ABOUT_ME_TEXT_DOMAIN),
				'phone_label' 				=> get_field('phone_label', $this->ID)
					?? __('Phone', GDI_ABOUT_ME_TEXT_DOMAIN),
				'email_placeholder' 	=> get_field('email_placeholder', $this->ID)
					?? __('Email', GDI_ABOUT_ME_TEXT_DOMAIN),
				'phone_placeholder' 	=> get_field('phone_placeholder', $this->ID)
					?? __('Phone number', GDI_ABOUT_ME_TEXT_DOMAIN),
				'button_cancel' 			=> get_field('button_cancel', $this->ID)
					?? __('Cancel', GDI_ABOUT_ME_TEXT_DOMAIN),
				'button_save' 				=> get_field('button_save', $this->ID)
					?? __('Save', GDI_ABOUT_ME_TEXT_DOMAIN),
				'button_edit' 				=> get_field('button_edit', $this->ID)
					?? __('Edit', GDI_ABOUT_ME_TEXT_DOMAIN),
				'phone_is_unverified' => get_field('phone_is_unverified', $this->ID)
					?? __('Your phone number is not verified', GDI_ABOUT_ME_TEXT_DOMAIN),
				'email_is_unverified' => get_field('email_is_unverified', $this->ID)
					?? __('Your email is not verified', GDI_ABOUT_ME_TEXT_DOMAIN),
				'application_error' 	=> get_field('application_error', $this->ID)
					?? __('Something went wrong, please try again later', GDI_ABOUT_ME_TEXT_DOMAIN),
				'form_terms' 					=> get_field('form_terms', $this->ID) ?? '',
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
