export default [
  {
    path: '/',
    component: '../layouts/NodeLayout',
    routes: [
      {
        path: '/',
        component: './Homepage'
      },
      {
        path: '/login',
        component: '../pages/Login'
      },
      {
        path: '/topic/:id',
        component: '../pages/Topic'
      }
    ]
  },
  {
    component: '../pages/404'
  }
];
