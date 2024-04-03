import { createApp } from 'vue';
import App from './App.vue';
import { pinia } from './stores';
import '@/styles/tailwind.css';

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

createApp(App).use(pinia).mount('#app');
