module.exports = {
  routes: [
    {
      sourceRoute: "/interface/v1/notification-templates",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/notification-templates",
        type: "POST",
        functionName: "createTemplate",
      },
    },
    {
      sourceRoute: "/interface/v1/notification-templates/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/notification-templates/list",
        type: "POST",
        functionName: "getTemplates",
      },
    },
    {
      sourceRoute: "/interface/v1/notification-templates/:id",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "notification-templates/:id",
        type: "PATCH",
        functionName: "updateTemplate",
      },
    },
    {
      sourceRoute: "/interface/v1/notification-templates/:id",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "notification-templates/:id",
        type: "DELETE",
        functionName: "deleteTemplate",
      },
    },
    {
      sourceRoute: "/interface/v1/notification/send",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "notification/send",
        type: "POST",
        functionName: "sendNotification",
      },
    },
    {
      sourceRoute: "/interface/v1/queue",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "queue",
        type: "POST",
        functionName: "saveQueue",
      },
    },
    {
      sourceRoute: "/interface/v1/queue/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "queue/list",
        type: "POST",
        functionName: "listQueue",
      },
    },
    {
      sourceRoute: "/interface/v1/queue/:id",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "queue/:id",
        type: "PATCH",
        functionName: "updateQueue",
      },
    },
  ],
};
