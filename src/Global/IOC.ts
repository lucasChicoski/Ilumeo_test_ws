import { ManagementTimeRepository } from "../Infrastructure/Repository/ManagementTimeRepository/ManagementTimeRepository";
import { AuthRepository } from "../Infrastructure/Repository/AuthRepository/AuthRepository";

//Configuração global
import { prisma } from "../../prisma/GlobalInstance"

export enum RepositoryType {
    ManagementTimeRepository,
    AuthRepository,
}


export class RepositoryFactory {
    static getRepository(value: RepositoryType): any {
        switch (value) {
            case RepositoryType.ManagementTimeRepository:
                return new ManagementTimeRepository(prisma)
            case RepositoryType.AuthRepository:
                return new AuthRepository(prisma)
            default:
                throw new Error('Servico, não encontrado');
        }
    }
}