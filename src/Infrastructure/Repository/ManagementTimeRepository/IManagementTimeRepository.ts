import { ManagementTimeDTO } from "../../../Domain/DTO/ManagementTimeDTO"


export interface IManagementTimeRepository {
    getListTime(codeUser: String): Promise<any>
    setTime(codeUser: ManagementTimeDTO): Promise<any>
}