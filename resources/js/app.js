require('./bootstrap');

require('moment');

// Import modules...
import { createApp, h } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import moment from "moment";
// import store from "./store"; // comentado para fazer de acordo com diretivas do vue 3

// comentado para fazer de acordo com diretivas do vue 3
// Vue.filter('formatDate', function (value) {
//     if (value) {
//         return moment(value).format('DD/MM/YYYY HH:mm')
//     }
// });

// store.dispatch('userStateAction'); // comentado para fazer de acordo com diretivas do vue 3

const el = document.getElementById('app');

createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
