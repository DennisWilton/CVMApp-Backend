import User from "../../../models/user/User"
import uploadUserPicture from "../../../util/uploadUserPicture";

export default async function createUser({name, password, email, telefone, address, picture}){
    try {

        if(!name || !password || !email ) throw new Error("name, password and e-mail are required.");
        
        const user = new User({ name, password, email, telefone, address });
        
        const userSaved = await user.save();

        if(picture) {
            picture.id = user.id;
            await uploadUserPicture(picture);
        }

        return userSaved;

    }catch(e){
        throw new Error(`Failed to create new User, because: ${e.message}`)
    }
}