import { ManagementTimeDTO } from "../../../Domain/DTO/ManagementTimeDTO";
import { IManagementTimeRepository } from "./IManagementTimeRepository";


import { Management_time, PrismaClient } from "@prisma/client";

export class ManagementTimeRepository implements IManagementTimeRepository {

    private prismaDB: PrismaClient

    constructor(prismaContext: PrismaClient) {
        this.prismaDB = prismaContext
    }

    async getListTime(codeUser: string): Promise<any> {
        const result: Array<Management_time> = await this.prismaDB.management_time.findMany({ where: { code_user_ref: codeUser }, orderBy: [{ time: "desc" }] })
        return result

    }

    async setTime(codeUser: ManagementTimeDTO): Promise<any> {

        try {
            const result = await this.prismaDB.management_time.create({
                data: {
                    hash_time: codeUser.hash_time,
                    status: codeUser.status,
                    time: codeUser.time,
                    code_user_ref: codeUser.code_user
                }
            })
            return result

        } catch (error) {
            throw new Error('erro')
        }


    }
}