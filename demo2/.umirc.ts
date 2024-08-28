import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/list', component: 'list' },
    { path: '/login', component: 'login', layout: false },
    { path: '/admin', component: 'admin' },
  ],
  define: { 'process.env.NAME': process.env.NAME },
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  clientLoader: {},
});
