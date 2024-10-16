import ky from "ky";

export const apiAuth = ky.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set("X-Requested-With", "ky");
      },
    ],
  },
});
