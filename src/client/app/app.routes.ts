import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+home/index';
import { HomeSecurityRoutes } from './+home-security/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...HomeSecurityRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
