import { IAuthController } from "./IAuthController";
import { AuthService } from "src/Service/AuthService/AuthService";
import { UserModel } from "../../Domain/Models/UserModel";
import { Request, Response } from "express"

export class AuthController implements IAuthController {
    private authService: AuthService

    constructor(authService: AuthService) {
        this.authService = authService
    }

    async login(req: Request, res: Response): Promise<any> {

        const body = req.body

        const value = new UserModel({ code_user: body?.user_code })
        const result = await this.authService.login(value.code_user)

        return res.json(result)
    }
}