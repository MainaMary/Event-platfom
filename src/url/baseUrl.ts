import axios from "axios";
export const baseUrl = axios.create({
    baseURL: 'https://www.eventbriteapi.com/v3',
    headers:{
      Authorization: `Bearer ${import.meta.env.REACT_APP_API_TOKEN}`
    }
   
  });