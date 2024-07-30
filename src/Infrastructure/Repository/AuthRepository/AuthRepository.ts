import { PrismaClient, User } from "@prisma/client";
import { IAuthRepository } from "./IAuthRepository";

import { prisma } from "../../../../prisma/GlobalInstance"

export class AuthRepository implements IAuthRepository {
    private prismaDB: PrismaClient

    constructor(prismaContext: PrismaClient) {
        this.prismaDB = prismaContext
    }

    async login(code_user: string): Promise<User> {

        const result = await prisma.user.findUnique({ where: { code_user_id: code_user } })

        return result as User
    }

}