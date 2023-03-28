import axios from "axios";
export const baseUrl = axios.create({
    baseURL: 'https://www.eventbriteapi.com/v3',
   
  });