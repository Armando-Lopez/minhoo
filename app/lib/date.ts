import { formatDistance } from "date-fns";

export function dateDistance( date : string) {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });
}
