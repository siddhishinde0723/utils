const routesConfig = require("../constants/routes");
const attendanceController = require("./attendance");

const customHandler = async (req, res) => {
  const selectedRouteConfig = routesConfig.routes.find(
    (obj) => obj.sourceRoute === req.sourceRoute
  );
  return await attendanceController[
    selectedRouteConfig.targetRoute.functionName
  ](req, res, selectedRouteConfig);
};

const customHandlerController = {
  customHandler,
};
module.exports = customHandlerController;
