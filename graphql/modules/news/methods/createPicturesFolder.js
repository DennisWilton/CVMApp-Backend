import path from 'path';
import fs from 'fs';

export default function createPicturesFolder(id){
    try {
        const dir = path.join(__dirname, '../../../../public/pictures/news',id);
        if(!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true})
    } catch(e) {
        throw new Error("Falha ao tentar criar a pasta de imagens da notícia, porque: " + e.message);
    }
}