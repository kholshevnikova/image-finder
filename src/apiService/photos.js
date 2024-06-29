import axios from 'axios';

const API_KEY = '43edrUPXYJ2JN8lthDSMBFewxS6R302gLR9BjITvEfyZxyywsy8evxrT';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
