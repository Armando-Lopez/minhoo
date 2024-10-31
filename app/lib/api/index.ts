import { getAuthToken } from "@/modules/user/server-actions/auth";
import ky from "ky";

export const apiAuth = ky.extend({
  hooks: {
    beforeRequest: [
      async (request) => {
        const authToken = await getAuthToken();
        request.headers.set("Authorization", "Bearer " + authToken);
      },
    ],
  },
});
