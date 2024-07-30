import { User } from "@prisma/client";


export interface IAuthRepository {
    login(code_user: string): Promise<User>
}