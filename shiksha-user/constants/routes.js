module.exports = {
  routes: [
    {
      sourceRoute: "/interface/v1/account/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/create",
        type: "POST",
        functionName: "createUser",
      },
    },
    {
      sourceRoute: "/interface/v1/account/login",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/auth/login",
        type: "POST",
        functionName: "login",
      },
    },
  ],
};
