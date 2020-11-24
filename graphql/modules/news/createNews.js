import News from "../../../models/news/News"
import uploadNewsPicture from "../../../util/News/uploadNewsPicture";
import createPicturesFolder from './methods/createPicturesFolder';

export default async function createNews({title, content, author, picture, ...options}){
    try {

        if(!title || !content || !author) throw new Error("title, content and author are required.");

        const news = new News({ title, content, author });
        
        const newsSaved = await news.save();

        await createPicturesFolder(news.id);

        if(picture) {
            if(Array.isArray(picture)){
                for(let pic of picture){
                    pic.newsID = news.id;
                    await uploadNewsPicture(pic);
                }
            }else{
                picture.newsID = news.id;
                await uploadNewsPicture(picture);
            }
        }

        return newsSaved;

    }catch(e){
        console.log(e);
        throw new Error(`Failed to create new News, because: ${e.message || 'Unknown error'}`);
    }
}