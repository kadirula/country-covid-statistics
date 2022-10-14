import axios from 'axios';
// const BASE_URL = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total';
// const BASE_URL = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats';
const BASE_URL = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1481d81153msh44a5aee55355c48p1dc69ajsn38dcbb6793e0',
        'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url, type) => {
    const response = await axios.get(`${BASE_URL}/${type}?${url}`, options);

    return response.data;
}

