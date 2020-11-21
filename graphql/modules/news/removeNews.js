import News from "../../../models/news/News"
import removeNewsPicture from "../../../util/News/removeNewsPicture";

export default async function removeNews(id){
    try {
        if(!id) throw new Error("Please, provide an ID to remove the news.");
        
        const news = await News.findById(id);

        if(!news) throw new Error("News not found!");
        
        const result = await news.remove();

        removeNewsPicture(id);

        return !!result;
    }catch(e){
        const erro = new Error(`Failed to remove News, because: ${e.message}`)
        throw erro;
    }
}