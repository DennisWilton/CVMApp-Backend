import {unlinkSync} from 'fs';
import path from 'path';

export default async function removePostPicture(id, index){
    try {
        if(!index) throw "Index not provided."

        unlinkSync(path.join(__dirname, "../public/pictures/users", id + "_" + index + ".jpg"));
        
    } catch(e){
        console.log(`Failed to remove post (${id}) picture at index (${index})`)
    }
}