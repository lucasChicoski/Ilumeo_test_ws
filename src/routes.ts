
import { Router } from "express"
import { ManagementTimeController } from "./Controllers/ManagementTimeController/ManagementTimeController"
import { ManagementTimeService } from "./Service/ManagementTimeService/ManagementTimeService"
import { AuthController } from "./Controllers/AuthController/AuthController"
import { AuthService } from "./Service/AuthService/AuthService"

//Injeção de dependecia. Produtos
const manegementTimeService: ManagementTimeService = new ManagementTimeService()
const manegementTimeController: ManagementTimeController = new ManagementTimeController(manegementTimeService)
const authService: AuthService = new AuthService()
const authController: AuthController = new AuthController(authService)
function setRouter(app: Router) {
   //GetlistTimeUser
   app.post('/get-list-time', (req, res) => manegementTimeController.getListTime(req, res))
   app.post('/set-time', (req, res) => manegementTimeController.registerTime(req, res))
   app.post('/auth-user', (req, res) => authController.login(req, res))


   app.get('/teste', (req, res) => res.send("Api funcionando 🚀"))
}



export default setRouter