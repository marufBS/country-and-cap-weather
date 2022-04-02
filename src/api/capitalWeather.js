import { weatherApiUrl } from "../config";

export const getCapitalWeather = async (capitalName) => {
    const data = await fetch(`${weatherApiUrl}&query=${capitalName}`, {
        method: 'GET'
    })
        .catch(error => console.log(error))
    return data;
}