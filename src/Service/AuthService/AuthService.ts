import { RepositoryFactory, RepositoryType } from "../../Global/IOC";
import { IAuthService } from "./IAuthService";
import { AuthRepository } from "src/Infrastructure/Repository/AuthRepository/AuthRepository";
import { User } from "@prisma/client";
import { UserModel } from "../../Domain/Models/UserModel";



export class AuthService implements IAuthService {
    async login(user_code: string): Promise<UserModel> {
        const authRepository: AuthRepository = RepositoryFactory.getRepository(RepositoryType.AuthRepository)
        const result: User = await authRepository.login(user_code)
        const userModel = new UserModel({ code_user: result.code_user_id, name_user: result.nameUser })
        return userModel as UserModel
    }

}