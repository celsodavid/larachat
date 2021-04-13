## About Larachat

Larachat is a web application with chat in realtime:

- [Laravel] [Install Laravel](https://laravel.com/docs).
- [Setup][Jetstream com Inertia.js + Vue](https://jetstream.laravel.com/2.x/installation.html).
- [Database] Migrations e Models.
- [Realtime] [Laravel WebSockets](https://beyondco.de/docs/laravel-websockets/getting-started/introduction).
- [Listen WebSocket] [Laravel Echo](https://laravel.com/docs/8.x/broadcasting#receiving-broadcasts).
- [Action] Controller, Broadcast e Events.

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
