import Post from "../../../../models/post/Post";

export default async function getPostsWithImage(){
    const posts = await Post.find({});
    return posts;
}