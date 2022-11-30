<?php 

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
    'key' => 'group_637368ed99a9a',
    'title' => __('Plugin: About Me', 'gdi-modularity-my-pages-about-me'),
    'fields' => array(
        0 => array(
            'key' => 'field_6384881254f3f',
            'label' => __('About Me API Uri', 'gdi-modularity-my-pages-about-me'),
            'name' => 'about_me_api_uri',
            'type' => 'url',
            'instructions' => '',
            'required' => 1,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => __('http://example/api/v1/aboutme', 'gdi-modularity-my-pages-about-me'),
        ),
        1 => array(
            'key' => 'field_6387270615d1c',
            'label' => __('Email Verification Redirect Url', 'gdi-modularity-my-pages-about-me'),
            'name' => 'email_verification_redirect_url',
            'type' => 'link',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'return_format' => 'url',
        ),
        2 => array(
            'key' => 'field_6387272815d1d',
            'label' => __('Phone Verification Redirect Url', 'gdi-modularity-my-pages-about-me'),
            'name' => 'phone_verification_redirect_url',
            'type' => 'link',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'return_format' => 'url',
        ),
    ),
    'location' => array(
        0 => array(
            0 => array(
                'param' => 'options_page',
                'operator' => '==',
                'value' => 'my-pages-settings',
            ),
        ),
    ),
    'menu_order' => 100,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => true,
    'description' => '',
    'show_in_rest' => 0,
));
}