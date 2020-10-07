import {createWriteStream} from 'fs';
import path from 'path';

export default async function uploadUserPicture(_picture){
    try {
        const {createReadStream, mimetype, filename} = await _picture;
        if(!_picture.id) throw new Error("Please, provide user ID on picture upload!")
        if(!createReadStream || !mimetype || !filename) throw new Error("Invalid file type. Please, upload an image!")
        if(!mimetype.match("image")) throw new Error("Invalid file type. Please, upload an image!")
        const file = createReadStream();

        file.pipe(createWriteStream(path.join(__dirname, "../public/pictures/users", _picture.id + ".jpg" )))

    } catch(e){
        throw new Error(`Failed to upload user picture. ${e}`);
    }
}