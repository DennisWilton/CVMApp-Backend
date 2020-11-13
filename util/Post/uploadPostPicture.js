import fs, {createWriteStream} from 'fs';
import path from 'path';
import {v1 as uuid} from 'uuid';

export default async function uploadPostPicture(_picture){
    try {
        const {createReadStream, mimetype, filename} = await _picture;
        if(!_picture.postID) throw new Error("Please, provide post ID on picture upload!")
        if(!createReadStream || !mimetype || !filename) throw new Error("Invalid file type. Please, upload an image!")
        if(!mimetype.match("image")) throw new Error("Invalid file type. Please, upload an image!")
        const file = createReadStream();

        try{
            // Cria pasta, se não existe.
            
            try{
                await fs.promises.mkdir(path.join(__dirname, "../../public/pictures/posts", _picture.postID))
            }catch(e){
            }
            
            file.pipe(createWriteStream(path.join(__dirname, "../../public/pictures/posts", _picture.postID, `${uuid()}.jpg` )))
        }catch(e){
            console.log("Erro ao salvar a imagem do post.")
            throw e;
        }

    } catch(e){
        throw new Error(`Failed to upload post picture. ${e}`);
    }
}