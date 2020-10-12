"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var admin_component_1 = require("./admin/admin.component");
exports.routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: home_component_1.HomeComponent,
    },
    {
        path: "admin",
        component: admin_component_1.AdminComponent,
    },
];
//# sourceMappingURL=app.routes.js.map