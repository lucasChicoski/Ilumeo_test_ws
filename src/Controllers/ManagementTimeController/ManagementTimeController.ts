import { ManagementTimeModel } from "../../Domain/Models/ManagementTimeModel";
import { ManagementTimeService } from "../../Service/ManagementTimeService/ManagementTimeService";
import { IManagementTimeController } from "./IManagementTimeController";

import { Request, Response } from "express"


export class ManagementTimeController implements IManagementTimeController {
    private managementTimeService: ManagementTimeService

    constructor(managementTimeService: ManagementTimeService) {
        this.managementTimeService = managementTimeService
    }

    async getListTime(req: Request, res: Response): Promise<any> {
        const boby = req.body
        const codeUser = boby.code_user

        if (codeUser) {
            const result = await this.managementTimeService.getListTime(codeUser)
            return res.json(result)
        }

        return res.json({ erro: "erro" })

    }
    async registerTime(req: Request, res: Response): Promise<any> {

        /**
         * O que deve conter no body para registrar um tempo
         * @code_user codigo do usuário
         * @hash_time hash do tempo definido no dia por MD5
         * @status status => working | not_working
         * @time a data em formato Date
         */

        const body = req.body

        try {
            const managementTimeModel: ManagementTimeModel = new ManagementTimeModel({ code_user: body.code_user, hash_time: body.hash_time, status: body.status, time: body.time })
            const result = await this.managementTimeService.registerTime(managementTimeModel)

            return res.json(result)
        } catch (error) {
            return res.json({ error: "erro" })
        }

    }
}