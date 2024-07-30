import { ManagementTimeDTO } from "../DTO/ManagementTimeDTO";


export class ManagementTimeModel {
    code_user: string
    time: Date
    status: string //working | not_working
    hash_time: string
    // code_user_ref: String

    constructor(value: ManagementTimeDTO) {
        this.code_user = value?.code_user
        this.time = value?.time
        this.status = value?.status
        this.hash_time = value?.hash_time
    }
}