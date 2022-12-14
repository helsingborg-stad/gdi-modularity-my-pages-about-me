<?php 

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
    'key' => 'group_63872d9248a82',
    'title' => __('About Me Module Settings', 'gdi-modularity-my-pages-about-me'),
    'fields' => array(
        0 => array(
            'key' => 'field_63872df0088c1',
            'label' => __('Form Terms', 'gdi-modularity-my-pages-about-me'),
            'name' => 'form_terms',
            'type' => 'wysiwyg',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'delay' => 0,
            'tabs' => 'all',
            'toolbar' => 'basic',
            'media_upload' => 0,
        ),
        1 => array(
            'key' => 'field_63872e8d088c9',
            'label' => __('Labels', 'gdi-modularity-my-pages-about-me'),
            'name' => 'labels',
            'type' => 'group',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'layout' => 'block',
            'sub_fields' => array(
                0 => array(
                    'key' => 'field_63872d92088bc',
                    'label' => __('Email Label', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'email_label',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Email', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                1 => array(
                    'key' => 'field_63872dbe088bf',
                    'label' => __('Email Placeholder', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'email_placeholder',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Email', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                2 => array(
                    'key' => 'field_63872dae088be',
                    'label' => __('Phone Label', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'phone_label',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Phone', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                3 => array(
                    'key' => 'field_63872dcf088c0',
                    'label' => __('Phone Placeholder', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'phone_placeholder',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Phone number', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                4 => array(
                    'key' => 'field_63872e1d088c2',
                    'label' => __('Button Cancel', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'button_cancel',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Cancel', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                5 => array(
                    'key' => 'field_63872e28088c3',
                    'label' => __('Button Edit', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'button_edit',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Edit', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                6 => array(
                    'key' => 'field_63872e2e088c4',
                    'label' => __('Button Save', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'button_save',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Save', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                7 => array(
                    'key' => 'field_63872e3c088c5',
                    'label' => __('Phone is not verified', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'phone_is_unverified',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Your phone number is not verified.', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                8 => array(
                    'key' => 'field_63872e4a088c6',
                    'label' => __('Email is not verified', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'email_is_unverified',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Your email is not verified.', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                9 => array(
                    'key' => 'field_63872e7d088c8',
                    'label' => __('Application error', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'application_error',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Something went wrong, please try again later', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                10 => array(
                    'key' => 'field_638dc6d7065a6',
                    'label' => __('Resend Verification SMS', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'resend_verification_sms',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Resend SMS', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                11 => array(
                    'key' => 'field_638dc6f2065a7',
                    'label' => __('Sent Verification SMS', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'sent_verification_sms',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Sent SMS to {phone}', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                12 => array(
                    'key' => 'field_638dc70c065a9',
                    'label' => __('Resend Verification Email', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'resend_verification_email',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Resend mail', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
                13 => array(
                    'key' => 'field_638dc70d065aa',
                    'label' => __('Sent Verification Email', 'gdi-modularity-my-pages-about-me'),
                    'name' => 'sent_verification_email',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'maxlength' => '',
                    'placeholder' => __('Sent mail to {email}', 'gdi-modularity-my-pages-about-me'),
                    'prepend' => '',
                    'append' => '',
                ),
            ),
        ),
    ),
    'location' => array(
        0 => array(
            0 => array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'mod-about-me',
            ),
        ),
        1 => array(
            0 => array(
                'param' => 'block',
                'operator' => '==',
                'value' => 'acf/about-me',
            ),
        ),
    ),
    'menu_order' => 0,
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