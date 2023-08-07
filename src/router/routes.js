
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageHome.vue'),
        name: 'Home'
      },


    {
      path: '/about',
      component: () => import('pages/PageAbout.vue'),
      name: 'About'
  },

  {
    path: '/roll',
    component: () => import('pages/Roller.vue'),
    name: 'Roll'
},

{
  path: '/pref',
  component: () => import('pages/Preferences.vue'),
  name: 'Preferences'
},

{
  path: '/more',
  component: () => import('pages/More.vue'),
  name: 'More'
},

{
  path: '/notif',
  component: () => import('pages/Notifications.vue'),
  name: 'Notifications'
},

{
  path: '/news',
  component: () => import('pages/News.vue'),
  name: 'News'
},

{
  path: '/games',
  component: () => import('pages/Games.vue'),
  name: 'Games'
}
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
