// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs');
export default async function handler(req, res) {
    if(req.method==='POST'){
        let data=await fs.promises.readdir('contactdata');
        fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body));
        res.status(200).json(req.body);
    }
    else{
        res.send("others");
    }
}
