import * as db from '../../../data/db.json';
const fs = require('fs');

export default function handler(req, res) {
  let { userId } = req.query;
  userId = parseInt(userId);
  if (req.method == 'PUT') {
    const user = req.body;
    db.users[userId] = user;
    
    let data = JSON.stringify(db);
    fs.writeFileSync('data/db.json', data);
    
    res.status(200).send('Saved!');
  } else if (req.method == 'PUT') {
    const { users } = db;
    res.status(200).json(users[userId]);
  }
}
