<?php 

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
    'key' => 'group_637368ed99a9a',
    'title' => __('Plugin: About Me', 'gdi-modularity-my-pages-about-me'),
    'fields' => array(
        0 => array(
            'key' => 'field_637368ed86941',
            'label' => __('About Me GraphQL Uri', 'gdi-modularity-my-pages-about-me'),
            'name' => 'about_me_graphql_uri',
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
            'placeholder' => __('http://example/api/v1/aboutme/graphql', 'gdi-modularity-my-pages-about-me'),
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