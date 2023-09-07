export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', name: '注册', component: './User/Register' },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '首页', icon: 'icon-huanying', component: './Welcome' },
  { path: '/', redirect: '/add_chart' },
  { path: '/add_chart', name: '智能分析', icon: 'barChart', component: './AddChart' },
  {
    path: '/add_chart_async',
    name: '智能分析（异步）',
    icon: 'barChart',
    component: './AddChartAsync',
  },
  { path: '/my_chart', name: '我的图表', icon: 'pieChart', component: './MyChart' },
  {
    path: '/person',
    icon: 'icon-yonghu',
    name: '个人中心',
    routes: [{ path: '/person/info', name: '个人信息', component: './User/UserInfo/' }],
  },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: '管理页面', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '管理页面2', component: './Admin' },
    ],
  },

  { path: '*', layout: false, component: './404' },
];
