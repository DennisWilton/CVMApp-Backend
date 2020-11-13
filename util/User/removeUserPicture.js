import {unlinkSync} from 'fs';
import path from 'path';

export default async function removeUserPicture(id){
    try {

        unlinkSync(path.join(__dirname, "../../public/pictures/users", id+".jpg"));
        
    } catch(e){
        console.log(`Failed to remove user (${id}) picture.`)
    }
}