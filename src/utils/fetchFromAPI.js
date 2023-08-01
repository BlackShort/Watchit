import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

const options = {
  method: 'GET',
  params: {
    maxResults: '50',
    part: 'snippet',
    order: 'relevance',
    safeSearch: 'moderate',
    type: 'video,channel,playlist'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST
  }
};



export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}