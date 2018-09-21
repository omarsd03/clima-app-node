const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=678c21e669399c967b6be7884873018c`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}