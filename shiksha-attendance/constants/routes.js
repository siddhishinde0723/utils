module.exports = {
  routes: [
    {
      sourceRoute: "/interface/v1/attendance/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/v1/attendance",
        type: "POST",
        functionName: "createAttendance",
      },
    },
    {
      sourceRoute: "/interface/v1/account/attendance/bulkAttendance",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/v1/attendance/bulkAttendance",
        type: "POST",
        functionName: "createBulkAttendance",
      },
    },
    {
      sourceRoute: "/interface/v1/account/attendance/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/v1/attendance/list",
        type: "POST",
        functionName: "serachAttendance",
      },
    },
  ],
};
