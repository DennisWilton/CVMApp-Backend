import News from "../../../models/news/News"
import uploadNewsPicture from "../../../util/News/uploadNewsPicture";

export default async function updateNews(id, data){
    try {

        if(!id) throw new Error("Please, provide an ID to update an news.")
        
        const news = await News.findById(id)

        if(!news) throw new Error("News not found!")

        Object.assign(news, data)

        const updateNews = await news.save();

        
        if(data.picture) {
            if(Array.isArray(data.picture)){
                for(let pic of data.picture){
                    pic.newsID = news.id;
                    await uploadNewsPicture(pic);
                }
            }else{
                data.picture.newsID = news.id;
                await uploadNewsPicture(data.picture);
            }
        }

        return updateNews;

    }catch(e){
        throw new Error(`Failed to update News, because: ${e.message}`)
    }
}