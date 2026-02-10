import { members } from "@/components/data/members";

export default function handler(req, res) {
  const id = req.query.id;

  const ans = members[id];
  if (!ans) return res.status(404).json({ message: "not found" });
  return res.status(200).json(ans);
}
