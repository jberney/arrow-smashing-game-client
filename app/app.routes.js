"use strict";
var router_1 = require('@angular/router');
var splash_component_1 = require('./splash.component');
var routes = [{
        path: 'splash',
        component: splash_component_1.SplashComponent
    }, {
        path: '',
        redirectTo: '/splash',
        pathMatch: 'full'
    }];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map