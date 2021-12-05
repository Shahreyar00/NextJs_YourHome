import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '6cab2ff4f4mshe5a2b6b10a9b480p15db74jsn8d6b10d8ce89',
    },
  });
    
  return data;
}