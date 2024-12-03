import { Express } from "express";
import { cityRoutes } from "./city.routes";

const routesVersion1 = (app: Express): void => {
  app.use(cityRoutes);
};
export default routesVersion1;
