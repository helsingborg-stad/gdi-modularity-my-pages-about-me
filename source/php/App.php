<?php

namespace GdiAboutMe;

class App
{
    public function __construct()
    {
        add_action('init', array($this, 'registerModules'));
        add_action('template_redirect', array($this, 'verifyContactDetails'));
    }

    public function verifyContactDetails()
    {
        global $wp;

        $params = array_values(
            array_filter(
                [
                    [
                        'endpoint'      => '%1$s/verify/phone/%2$s',
                        'verification'  => $_GET['tel'] ?? '',
                        'redirectUrl'   => get_field('phone_verification_redirect_url', 'options'),
                    ],
                    [
                        'endpoint'      => '%1$s/verify/email/%2$s',
                        'verification'  => $_GET['mail'] ?? '',
                        'redirectUrl'   => get_field('email_verification_redirect_url', 'options'),
                    ],
                ],
                fn ($p) => !empty($p['verification'] && $p['endpoint'])
            )
        );

        if (
            home_url($wp->request) !== home_url('/verify')
            || empty($params)
        ) {
            return;
        }

        $requestUrl = sprintf(
            $params[0]['endpoint'],
            get_field('about_me_api_uri', 'options'),
            $params[0]['verification'],
        );

        $request = curl_init($requestUrl);
        curl_setopt($request, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($request, CURLOPT_HTTPHEADER, [
            'Accept: application/json',
            'Content-Type: application/json'
        ]);

        $request = curl_exec($request);
        $response = json_decode($request, true);

        if (!empty($response['verified'])) {
            wp_redirect($params[0]['redirectUrl'] ?? home_url());
            exit();
        }
    }

    public function registerModules()
    {
        foreach (['mod-about-me' => 'AboutMe'] as $slug => $name) {
            if (function_exists('modularity_register_module')) {
                modularity_register_module(
                    GDI_ABOUT_ME_MODULE_PATH . "/" . $name,
                    $name
                );
            }

            add_filter(
                '/Modularity/externalViewPath',
                fn (array $paths) => array_merge(
                    $paths,
                    [$slug => GDI_ABOUT_ME_MODULE_PATH . "/" . $name . "/views"]
                ),
                1,
                3
            );
        }
    }
}
