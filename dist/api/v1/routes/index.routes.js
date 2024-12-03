"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_routes_1 = require("./city.routes");
const routesVersion1 = (app) => {
    app.use(city_routes_1.cityRoutes);
};
exports.default = routesVersion1;
