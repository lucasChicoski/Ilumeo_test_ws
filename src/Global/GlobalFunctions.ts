
import md5 from "md5"

export class GlobalFunctions {

    static hashMD5(value: string): string {

        return md5(value)
    }

    static getCurrentDate() {
        const offset = -3 * 60;
        const date = new Date();
        const currentDate = new Date(date.getTime() + (offset * 60000));

        return currentDate
    }

    static getCurrentDateFill() {
        const offset = -3 * 60;
        const date = new Date();
        const currentDate = new Date(date.getTime() + (offset * 60000));
        const fillDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1 < 10 ? '0' + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1}-${currentDate.getDate()}`
        return fillDate
    }

    static correctDate(dateV: string) {
        // A string de data e hora fornecida
        const dateString = dateV;

        // Crie um objeto Date a partir da string
        const date = new Date(dateString);

        // Adicione 3 horas (em milissegundos) ao objeto Date
        const hoursToAdd = 3;
        const millisecondsPerHour = 60 * 60 * 1000;
        date.setTime(date.getTime() + hoursToAdd * millisecondsPerHour);

        // Converta o objeto Date de volta para uma string ISO
        const newDateString = date.toISOString();

        console.log('Data e hora original:', dateString);
        console.log('Data e hora ajustada:', newDateString);
    }
}