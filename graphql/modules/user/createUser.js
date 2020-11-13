import User from "../../../models/user/User"
import uploadUserPicture from "../../../util/User/uploadUserPicture";

export default async function createUser({name, password, email, cpf, telefone, address, picture}){
    try {

        if(!name || !password || !email || !cpf ) throw new Error("name, cpf, password and e-mail are required.");

        cpf = cpf.replace(/\D/g, "");
        
        const user = new User({ name, password, cpf, email, telefone, address });
        
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