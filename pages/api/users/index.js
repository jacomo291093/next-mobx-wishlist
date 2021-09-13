import * as db from '../../../data/db.json';

export default function handler(req, res) {
  if (req.method !== "GET") return res.status(502).send("Only GET is allowed");
  const { users } = db;
  res.status(200).json(users);
}