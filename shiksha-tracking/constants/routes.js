module.exports = {
  routes: [
    {
      sourceRoute:
        "/interface/v1/tracking/assessment/read/:assessmentTrackingId",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/assessment/read/:assessmentTrackingId",
        type: "GET",
        functionName: "getTrackingAssessment",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/assessment/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/assessment/create",
        type: "POST",
        functionName: "createTrackingAssessment",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/assessment/search",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/assessment/search",
        type: "POST",
        functionName: "searchTrackingAssessment",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/assessment/search/status",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/assessment/search/status",
        type: "POST",
        functionName: "statusOfTrackingAssessment",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/assessment/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/assessment/list",
        type: "POST",
        functionName: "getTrackingAssessmentList",
      },
    },
    {
      sourceRoute:
        "/interface/v1/tracking/assessment/delete/:assessmentTrackingId",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/assessment/delete/:assessmentTrackingId",
        type: "DELETE",
        functionName: "deleteTrackingAssessment",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/content/read/:contentTrackingId",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/content/read/:contentTrackingId",
        type: "GET",
        functionName: "getTrackingContent",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/content/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/content/create",
        type: "POST",
        functionName: "createTrackingContent",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/content/search",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/content/search",
        type: "POST",
        functionName: "searchTrackingContent",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/content/search/status",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/content/search/status",
        type: "POST",
        functionName: "statusOfTrackingContent",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/content/course/status",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/content/course/status",
        type: "POST",
        functionName: "statusOfTrackingCourse",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/content/unit/status",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/content/unit/status",
        type: "POST",
        functionName: "statusOfTrackingUnit",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/content/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/content/list",
        type: "POST",
        functionName: "getTrackingContentList",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/content/delete/:contentTrackingId",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/content/delete/:contentTrackingId",
        type: "DELETE",
        functionName: "deleteTrackingContent",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/content/course/inprogress",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/content/course/inprogress",
        type: "POST",
        functionName: "getTrackingCourseInProgressList",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/user_certificate/status/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/user_certificate/status/create",
        type: "POST",
        functionName: "enrollUserToCourse",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/user_certificate/status/update",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/user_certificate/status/update",
        type: "POST",
        functionName: "updateStatusOfUserForCourse",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/user_certificate/status/get",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/user_certificate/status/get",
        type: "POST",
        functionName: "getStatusOfUserForCourse",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/user_certificate/status/search",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/user_certificate/status/search",
        type: "POST",
        functionName: "listUsersCoursesStatus",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/certificate/issue",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/certificate/issue",
        type: "POST",
        functionName: "issueCertificate",
      },
    },
    {
      sourceRoute: "/interface/v1/tracking/certificate/render",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/v1/tracking/certificate/render",
        type: "POST",
        functionName: "renderCertificate",
      },
    },
  ],
};
