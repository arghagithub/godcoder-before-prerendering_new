// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/blogs?slug=Focus%20on%20the%20process
//rea particular files corresponding to json
const fs = require('fs');
export default function handler(req, res) {

  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(400).json(err);
    }
    else {
      res.status(200).json(JSON.parse(data));
    }
  });
}
