import App from '../../views/App.vue';

import Home from '../../views/Home.vue';
import About from '../../views/About.vue';

import PageNotFound from '../../views/PageNotFound.vue';

const routes = [
  {
    path: '',
    component: App,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
];

export default routes;
