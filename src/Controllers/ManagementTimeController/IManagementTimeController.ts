
import { Request, Response } from "express"
export interface IManagementTimeController {
    getListTime(req: Request, res: Response): Promise<any>
    registerTime(req: Request, res: Response): Promise<any>
}