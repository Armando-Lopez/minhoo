import { formatDistance } from "date-fns";

interface DateDistanceProps {
  date: string;
}

export default function DateDistance({ date }: DateDistanceProps) {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });
}
