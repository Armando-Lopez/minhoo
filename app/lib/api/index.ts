import ky from "ky";

export const apiAuth = ky.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjk1LCJuYW1lIjoiIiwidXNlcm5hbWUiOiIiLCJyb2xlcyI6WzFdLCJpYXQiOjE3MzAyNjU5NTksImV4cCI6MTc2MTgwMTk1OX0.yGytS0kXCH4uspNEW2O_UcLNkkgSl7uCejPGVNHubEs"
        );
      },
    ],
  },
});
