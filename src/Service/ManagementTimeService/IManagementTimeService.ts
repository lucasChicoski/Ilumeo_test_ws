import { ManagementTimeModel } from "../../Domain/Models/ManagementTimeModel"



export interface IManagementTimeService {
    getListTime(codeUser: String): Promise<any>
    registerTime(infRegister: ManagementTimeModel): Promise<any>
}