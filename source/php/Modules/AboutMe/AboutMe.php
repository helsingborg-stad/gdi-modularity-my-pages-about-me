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
			'aboutMeGraphQLUri' => get_field('about_me_graphql_uri', 'options')
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
