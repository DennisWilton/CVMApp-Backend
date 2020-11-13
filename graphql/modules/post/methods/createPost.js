import Post from './../../../../models/post/Post';
import postUtils from "./../../../../util/Post";

const { uploadPostPicture } = postUtils;

export default async function createPost({title, author, content, pictures}){
    try {

        if(!title || !content ) throw new Error("title and content are required.");
        
        const post = new Post({ title, author, content});
        
        const postSaved = await post.save();

        if(pictures) {
            pictures.forEach( async (picture, i) => {
                picture.postID = post.id;
                await uploadPostPicture(picture);
            });
        }

        return postSaved;

    }catch(e){
        throw new Error(`Failed to create new Post, because: ${e.message}`)
    }
}