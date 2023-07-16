import axios from 'axios';

type IOptions = {
  params: {
    maxResults: string;
  },
  headers: {
    'X-RapidAPI-Key': string;
    'X-RapidAPI-Host': string;
  }
}
const options: IOptions = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY!,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${import.meta.env.BASE_URL}${url}`, options);
  return data;
}
