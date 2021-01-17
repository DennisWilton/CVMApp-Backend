import Workshop from '../../../models/workshop/Workshop';

export default {
    Query: {
        workshops: async () => Workshop.find({}),
        workshop: async (_, {id}) => Workshop.findById(id)
    },
    Mutation: {
        // createWorkshop: async (_, {data}) => (data),
        // updateWorkshop: async (_, {id, data}) => (id, data),
        // removeWorkshop: async (_, {id}) => (id),
    }
}