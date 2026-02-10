import { teamsData } from "@/components/data/teams";

export default function handler(req, res) {
  return res.status(200).json({ teamsData });
}
