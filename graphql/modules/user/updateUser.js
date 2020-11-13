import User from "../../../models/user/User"
import uploadUserPicture from "../../../util/User/uploadUserPicture";

export default async function updateUser(id, data){
    try {

        if(!id) throw new Error("Please, provide an ID to update an user.")
        
        const user = await User.findById(id)

        if(!user) throw new Error("User not found!")

        Object.assign(user, data)

        user.picture = "";

        const updateUser = await user.save();

        
        if(data.picture) {
            data.picture.id = user.id;
            await uploadUserPicture(data.picture);
        }

        return updateUser;

    }catch(e){
        throw new Error(`Failed to update User, because: ${e.message}`)
    }
}