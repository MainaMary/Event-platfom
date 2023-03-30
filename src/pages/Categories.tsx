import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { baseUrl } from '../url/baseUrl'

const Categories = () => {
    const fetchEventDetails = async () =>{
        try{
        const response = await axios.get('https://www.eventbriteapi.com/v3/subcategories/')
        console.log(response)
        return response.data
        }
        catch(error){

        }

    }
    const { isFetching,  isLoading, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchEventDetails,
      })
      if (isLoading) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }
  return (
    <div>Details</div>
  )
}

export default Categories