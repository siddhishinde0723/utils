const routesConfig = require("../constants/routes");
const notificationController = require("./notification");

const customHandler = async (req, res) => {
  const selectedRouteConfig = routesConfig.routes.find(
    (obj) => obj.sourceRoute === req.sourceRoute
  );
  return await notificationController[
    selectedRouteConfig.targetRoute.functionName
  ](req, res, selectedRouteConfig);
};

const customHandlerController = {
  customHandler,
};
module.exports = customHandlerController;
