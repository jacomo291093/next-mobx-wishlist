import * as db from '../../../data/db.json'


export default function handler(req, res) {
  const { gender } = req.query;
  const response = db.gender[gender];
  res.status(200).json(response);
}
