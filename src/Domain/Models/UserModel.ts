import { UserDTO } from "../DTO/UserDTO"


export class UserModel {
    name?: string
    code_user: string

    constructor(value: UserDTO) {
        this.name = value.name_user
        this.code_user = value.code_user
    }
}
