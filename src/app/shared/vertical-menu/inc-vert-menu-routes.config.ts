import { RouteInfo } from './vertical-menu.metadata';

export const INCROUTES: RouteInfo[] = [

  {
    path: '',
    title: 'Dashboard',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '2',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false, submenu: [
      {
        path: '/dashboard/inc-dashboad',
        title: 'dashboard',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false, submenu: []
      }
    ]
  }
];
