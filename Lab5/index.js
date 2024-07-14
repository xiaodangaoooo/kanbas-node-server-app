import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import ModuleRoutes from "./ModuleRoutes.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  ModuleRoutes(app);
  WorkingWithArrays(app);
}
