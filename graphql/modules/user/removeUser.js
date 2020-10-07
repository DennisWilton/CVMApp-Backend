import User from "../../../models/user/User"
import removeUserPicture from "../../../util/removeUserPicture";

export default async function removeUser(id){
    try {
        if(!id) throw new Error("Please, provide an ID to remove the user.");
        
        const user = await User.findById(id);

        if(!user) throw new Error("User not found!");
        
        const result = await user.remove();

        removeUserPicture(id);

        return !!result;
    }catch(e){
        const erro = new Error(`Failed to update User, because: ${e.message}`)
        throw erro;
    }
}