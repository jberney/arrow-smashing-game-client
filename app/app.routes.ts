import {provideRouter, RouterConfig}  from '@angular/router';

import {SplashComponent} from './splash.component';

const routes:RouterConfig = [{
    path: 'splash',
    component: SplashComponent
}, {
    path: '',
    redirectTo: '/splash',
    pathMatch: 'full'
}];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];