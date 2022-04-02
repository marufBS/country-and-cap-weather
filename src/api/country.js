import { courtryApiUrl } from "../config";

export const getCountryData = async (name) => {
    const data = await fetch(`${courtryApiUrl}${name}`, {
        method: 'GET'
    })
        .catch(error => console.log(error))
    return data;
}