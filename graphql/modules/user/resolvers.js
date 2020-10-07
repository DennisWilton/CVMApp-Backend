import User from '../../../models/user/User';
import createUser from './createUser';
import updateUser from './updateUser';
import removeUser from './removeUser';

export default {
    Query: {
        users: async () => User.find({}, {password: 0}),
        user: async (_, {id}) => User.findById(id, {password: 0})
    },
    Mutation: {
        createUser: async (_, {data}) => createUser(data),
        updateUser: async (_, {id, data}) => updateUser(id, data),
        removeUser: async (_, {id}) => removeUser(id),
    }
}