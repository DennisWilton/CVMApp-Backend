import fs from 'fs';
import path from 'path';

export default async function getNewsPictures(id){
    try {
        const result = await fs.readdirSync(path.join(__dirname,"..","..","..","..","public","pictures", "news", id));
        return result;
    }catch(e){
        console.log(e);
        return [];
    }
}