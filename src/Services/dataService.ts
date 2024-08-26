import axios from "axios"


export const getData = async () => {
    const graphrequest = axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    const maprequest = axios.get('https://disease.sh/v3/covid-19/countries')

    let response= await Promise.all([graphrequest,maprequest]);
    
    return response;
}