
# GDI Modularity My Pages About Me

Modularity Module that allows authenticated users to manage contact details. This is a React app wrapped within a Wordpress plugin as a Modularity module.

## Getting started

```zsh
# clone repo into wp-content/plugins folder
git clone https://github.com/helsingborg-stad/gdi-modularity-my-pages-about-me.git

# install composer dependencies
composer install

# install npm dependencies
yarn

# build scripts
yarn build

# watch scripts (for development)
yarn watch

# activate wordpress plugin (using wp-cli)
wp plugin activate gdi-modularity-my-pages-about-me --url=example.local

# configure api endpoint (using wp-cli)
wp option update options_about_me_api_uri http://localhost:3000/api/v1/aboutme --url=example.local

```

## Getting started (Headless without Wordpress)

This plugin can be run without Wordpress (for development).

```zsh
# install dependencies
yarn

# copy example env 
cp .env.example .env

# start web server
yarn start
```
