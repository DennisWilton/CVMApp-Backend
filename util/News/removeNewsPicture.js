import {rmdirSync} from 'fs';
import path from 'path';

export default async function removeNewsPicture(id){
    try {

        rmdirSync(path.join(__dirname, "../../public/pictures/news", id), {recursive: true});
        
    } catch(e){
        console.log(e);
        console.log(`Failed to remove news (${id}) picture.`)
    }
}