const routesConfig = require("../constants/routes");
const trackingController = require("./tracking");

const customHandler = async (req, res) => {
  const selectedRouteConfig = routesConfig.routes.find(
    (obj) => obj.sourceRoute === req.sourceRoute
  );
  return await trackingController[selectedRouteConfig.targetRoute.functionName](
    req,
    res,
    selectedRouteConfig
  );
};

const customHandlerController = {
  customHandler,
};
module.exports = customHandlerController;
