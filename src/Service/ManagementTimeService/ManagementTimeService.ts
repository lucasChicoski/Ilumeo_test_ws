import { Management_time } from "@prisma/client";
import { ManagementTimeModel } from "../../Domain/Models/ManagementTimeModel";
import { RepositoryFactory, RepositoryType, } from "../../Global/IOC";

import { IManagementTimeService } from "./IManagementTimeService";
import { GlobalFunctions } from "../../Global/GlobalFunctions";
import { ManagementTimeDTO } from "../../Domain/DTO/ManagementTimeDTO";
import { ManagementTimeRepository } from "../../Infrastructure/Repository/ManagementTimeRepository/ManagementTimeRepository";


export class ManagementTimeService implements IManagementTimeService {
    async getListTime(codeUser: string): Promise<any> {
        let is_working: boolean
        const list_before_days: Array<any> = []
        let current_day_work_time = null

        const menagementTimeRepository: ManagementTimeRepository = RepositoryFactory.getRepository(RepositoryType.ManagementTimeRepository)
        const result: Array<Management_time> = await menagementTimeRepository.getListTime(codeUser)

        //Fazer o tratamento e retornar
        const current_date = new Date()
        const x = `${current_date.getFullYear()}-${current_date.getMonth() + 1 < 10 ? '0' + (current_date.getMonth() + 1) : current_date.getMonth() + 1}-${current_date.getDate()}`
        const lastRegisterIsCurrentDate = GlobalFunctions.hashMD5(x)

        if (result?.length > 0) {
            is_working = result[0].status == "working" ? true : false

            if (is_working || result[0].hash_time == lastRegisterIsCurrentDate) {
                //para manipular data : aaaa-mm-dd
                const currenthashDate: string = result[0].hash_time
                const groupByHash = this.groupBy(result)

                for (const key in groupByHash) {
                    if (key != currenthashDate) {
                        const listhours = []
                        const listMinutes = []
                        const listWorks: Management_time[] = result.filter((e) => e.hash_time == key)

                        for (let index = 0; index < listWorks.length; index++) {
                            if (index != 0) index = index + 1

                            const totalTime = this.calcularDiferencaEmHoras(listWorks[index + 1].time, listWorks[index].time)

                            listhours.push(totalTime.hours)
                            listMinutes.push(totalTime.minutes)

                            if (index == listWorks.length - 2) {
                                const somaHours = listhours.reduce((total, numero) => total + numero, 0);
                                const somaMinutes = listMinutes.reduce((total, numero) => total + numero, 0);
                                list_before_days.push({
                                    date: `${listWorks[0].time.getDate()}/${listWorks[0].time.getMonth() + 1}/${listWorks[0].time.getFullYear()}`,
                                    totalHours: `${somaHours}h ${somaMinutes}m`
                                })
                                break
                            }
                        }
                    } else {
                        const listWorks: Management_time[] = result.filter((e) => e.hash_time == key)
                        const is_odd = listWorks.length % 2
                        if (listWorks.length < 1) {
                            // return []
                        }
                        else if (listWorks.length == 1) {
                            const totalTime = this.calcularDiferencaEmHoras(listWorks[0].time, GlobalFunctions.getCurrentDate())
                            current_day_work_time = {
                                somaHours: totalTime.hours,
                                somaMinutes: totalTime.minutes
                            }
                            // break
                        }
                        else if (is_odd == 0) {
                            const listhours = []
                            const listMinutes = []
                            for (let index = 0; index < listWorks.length; index++) {
                                if (index != 0) index = index + 1

                                const totalTime = this.calcularDiferencaEmHoras(listWorks[index + 1].time, listWorks[index].time)

                                listhours.push(totalTime.hours)
                                listMinutes.push(totalTime.minutes)

                                if (index == listWorks.length - 2) {
                                    const somaHours = listhours.reduce((total, numero) => total + numero, 0);
                                    const somaMinutes = listMinutes.reduce((total, numero) => total + numero, 0);
                                    current_day_work_time = {
                                        somaHours,
                                        somaMinutes
                                    }
                                    break
                                }
                            }

                        }
                        else if (is_odd == 1 && listWorks.length > 1) {
                            const listhours = []
                            const listMinutes = []
                            for (let index = 1; index < listWorks.length; index++) {
                                if (index != 1) index = index + 1

                                const totalTime = this.calcularDiferencaEmHoras(listWorks[index + 1].time, listWorks[index].time)

                                listhours.push(totalTime.hours)
                                listMinutes.push(totalTime.minutes)

                                if (index == listWorks.length - 2) {

                                    const totalTime = this.calcularDiferencaEmHoras(listWorks[0].time,  GlobalFunctions.getCurrentDate())

                                    listhours.push(totalTime.hours)
                                    listMinutes.push(totalTime.minutes)

                                    const somaHours = listhours.reduce((total, numero) => total + numero, 0);
                                    const somaMinutes = listMinutes.reduce((total, numero) => total + numero, 0);
                                    current_day_work_time = {
                                        somaHours: Math.abs(somaHours),
                                        somaMinutes: Math.abs(somaMinutes)
                                    }
                                    break
                                }
                            }
                        }
                    }
                }

                return {
                    is_working,
                    list_before_days,
                    current_day_work_time
                }
            } else {
                const groupByHash = this.groupBy(result)

                for (const key in groupByHash) {

                    const listhours = []
                    const listMinutes = []
                    const listWorks: Management_time[] = result.filter((e) => e.hash_time == key)

                    for (let index = 0; index < listWorks.length; index++) {
                        if (index != 0) index = index + 1

                        const totalTime = this.calcularDiferencaEmHoras(listWorks[index + 1].time, listWorks[index].time)

                        listhours.push(totalTime.hours)
                        listMinutes.push(totalTime.minutes)

                        if (index == listWorks.length - 2) {
                            const somaHours = listhours.reduce((total, numero) => total + numero, 0);
                            const somaMinutes = listMinutes.reduce((total, numero) => total + numero, 0);
                            list_before_days.push({
                                date: `${listWorks[0].time.getDate()}/${listWorks[0].time.getMonth() + 1}/${listWorks[0].time.getFullYear()}`,
                                totalHours: `${somaHours}h ${somaMinutes}m`
                            })
                            break

                        }
                    }
                }
                return {
                    is_working,
                    list_before_days,
                    current_day_work_time
                }
            }
        }
        return {
            status: "201",
            message: "Nenhum registro encontrado"
        }

    }
    async registerTime(infRegister: ManagementTimeModel): Promise<any> {
        const menagementTimeRepository: ManagementTimeRepository = RepositoryFactory.getRepository(RepositoryType.ManagementTimeRepository)
        const result: ManagementTimeDTO = await menagementTimeRepository.setTime(infRegister)

        return result
    }


    groupBy(array: any) {
        const gruposPorIdade = array.reduce((grupos: any, itemTime: any) => {
            const hash = itemTime.hash_time;
            grupos[hash] = grupos[hash] || [];
            grupos[hash].push(itemTime);
            return grupos;
        }, {});

        return gruposPorIdade
    }

    calcularDiferencaEmHoras(data1: any, data2: any) {
        const diferencaEmMilissegundos = data2 - data1;
        const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60);

        const horas = Math.floor(diferencaEmHoras / 60);
        const minutosRestantes = diferencaEmHoras % 60;

        return {
            hours: horas,
            minutes: minutosRestantes
        }
    }
}