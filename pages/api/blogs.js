// reading the blogdata folder and send the files in response
const fs = require('fs');

export default async function handler(req, res) {

    let data = await fs.promises.readdir('blogdata', 'utf-8');
    let myfile, allblogs = [];
    for (let index = 0; index < data.length; index++) {
        let file = data[index];
        myfile= await fs.promises.readFile(`blogdata/${file}`,'utf-8');
        allblogs.push(JSON.parse(myfile));
    }
    res.status(200).send(allblogs);
}