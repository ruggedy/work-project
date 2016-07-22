import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+home/index';
import { Home2Routes } from './+homev2/index';
import { Home3Routes } from './+homev3/index';
import { HomeSecurityRoutes } from './+home-security/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...HomeSecurityRoutes,
  ...Home2Routes,
  ...Home3Routes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
