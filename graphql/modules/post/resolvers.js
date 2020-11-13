import Post from '../../../models/post/Post';
import methods from './methods';

const { createPost, updatePost, removePost, getPostsWithImage } = methods;

export default {
    Query: {
        posts: async () => getPostsWithImage(),
        post: async (_, {id}) => Post.findById(id)
    },
    Mutation: {
        createPost: async (_, {data}) => createPost(data),
        updatePost: async (_, {id, data}) => updatePost(id, data),
        removePost: async (_, {id}) => removePost(id),
    }
}