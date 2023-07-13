const axios = require('axios');

const fetchData = async(url) =>{
    try {

        const response = await axios.get(url);
        const data = response.data
        return data
      } catch (error) {
        console.error('Error:', error.message)
        return null
      }
}

const storeData = async(url, body) =>{
    try {
        const response = await axios.post(url, body);
        const data = response.data
        return data
      } catch (error) {
        console.error('Error:', error.message)
        return null
      }
}


module.exports = {
    fetchData,
    storeData
}