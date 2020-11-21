import News from '../../../models/news/News';
import User from '../../../models/user/User';
import createNews from './createNews';
import updateNews from './updateNews';
import removeNews from './removeNews';
import { UserInputError } from 'apollo-server';
import getNewsPictures from './methods/getNewsPictures';


export default {
    News: {
        author: ({author}, {id}) => User.findById(author, {password: 0}),
        picture: ({id}) => getNewsPictures(id)
    },
    Query: {
        allNews: async () => { 
            return await News.find({})
        },
        news: async (_, {id}) => News.findById(id, {password: 0})
    },
    Mutation: {
        createNews: async (_, {data}) => createNews(data),
        updateNews: async (_, {id, data}) => updateNews(id, data),
        removeNews: async (_, {id}) => removeNews(id),
    }
}