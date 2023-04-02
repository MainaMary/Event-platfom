import React,{useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { baseUrl } from '../url/baseUrl'
import CustomInput from '../components/CustomInput'

const Categories = () => {
  const [search, setSearch] = useState<string>('')
  const handleChange =(e:any)=>{
    e.preventDefault()
    setSearch(e.target.value)
  }
    const fetchEventCategory = async () =>{
        try{
        const response = await axios.get(`https://www.eventbriteapi.com/v3/subcategories/&API_TOKEN=${import.meta.env.REACT_APP_API_TOKEN}`)
        console.log(response)
        return response.data
        }
        catch(error){

        }

    }
    const { isFetching,  isLoading, isError, data, error } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchEventCategory,
      })
      if (isLoading) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }
    
  return (
    <div>
      <CustomInput value={search} onChange={handleChange}/>
    </div>
  )
}

export default Categories