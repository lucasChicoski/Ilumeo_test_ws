import { RepositoryFactory, RepositoryType } from "../../Global/IOC";
import { IAuthService } from "./IAuthService";
import { AuthRepository } from "../../Infrastructure/Repository/AuthRepository/AuthRepository";
import { User } from "@prisma/client";
import { UserModel } from "../../Domain/Models/UserModel";



export class AuthService implements IAuthService {
    async login(user_code: string): Promise<any> {
        const authRepository: AuthRepository = RepositoryFactory.getRepository(RepositoryType.AuthRepository)
        const result: User = await authRepository.login(user_code)

        if(!result){
            return {
                response: null,
                message: "nenhum usuário com esse código"
            }
        }

        const userModel = new UserModel({ code_user: result.code_user_id, name_user: result.nameUser })
        return userModel as UserModel
    }

}