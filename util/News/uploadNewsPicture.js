import fs, {createWriteStream, fstat} from 'fs';
import path from 'path';
import * as uuid from 'uuid';

export default async function uploadNewsPicture(_picture){
    try {
            const {createReadStream, mimetype, filename} = await _picture;
            if(!_picture.newsID) throw new Error("Please, provide news ID on picture upload!")
            if(!createReadStream || !mimetype || !filename) throw new Error("Invalid file type. Please, upload an image!")
            if(!mimetype.match("image")) throw new Error("Invalid file type. Please, upload an image!")
            const file = createReadStream();
            
            fs.mkdir(path.join(__dirname, '../../public/pictures/news',_picture.newsID), (err) => { 
                if (err) { 
                    return console.error(err); 
                } 
                console.log('Directory created successfully!'); 
            }); 
            
            file.pipe(createWriteStream(path.join(__dirname, "../../public/pictures/news", _picture.newsID, uuid.v1() + ".jpg" )))
    } catch(e){
        throw new Error(`Failed to upload news picture. ${e}`);
    }
}