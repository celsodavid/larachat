## About Larachat

Larachat is a web application with chat in realtime:

- [Laravel] [Install Laravel](https://laravel.com/docs).
- [Setup][Jetstream com Inertia.js + Vue](https://jetstream.laravel.com/2.x/installation.html).
- [Database] Migrations e Models.
- [Realtime] [Laravel WebSockets](https://beyondco.de/docs/laravel-websockets/getting-started/introduction).
- [Listen WebSocket] [Laravel Echo](https://laravel.com/docs/8.x/broadcasting#receiving-broadcasts).
- [Action] Controller, Broadcast e Events.
- [TailwindCss](https://tailwindcss.com/docs).

## Laravel

- Passos
    - composer create-project laravel/laravel larachat
    - cd larachat
        - edit .env and add configuration access database 
    - php artisan serve

## Jetstream com Inertia.js + Vue

- Passos
    - composer require laravel/jetstream
    - php artisan jetstream:install inertia
    - npm install && npm run dev
    - php artisan migrate

## Criando Controller e Configurando e Normalizando as Rotas 

- php artisan make:controller Web/PageController
- Tirando as closures da rota e colocando no controller
- Criando o grupo de rotas

## TailwindCss and Vue

- Para o `cursor: pointer` funcionar deve-se add no arquivo tailwind.config.js na seção `variants->extends` as diretivas
para habilitar o cursor
- Para que as alterações surtam efeito em tempo de alteração deixar executando a diretiva `npm run watch`

## Moment JS

- Documentação [MomentJS](https://momentjs.com/)
- [Instalação]: `npm install moment --save`

## VueJs Vuex

- Para instalar o vuex
  - command: `npm install vuex --save`

- Para persistir as informações no Vuex
  - command: `npm install vuex-persistedstate --save`