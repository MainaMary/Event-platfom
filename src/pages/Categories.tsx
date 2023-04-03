import React,{useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { baseUrl } from '../url/baseUrl'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Categories = () => {
  const [search, setSearch] = useState<string>('')
  const [inputError, setInputError]= useState<string>('')
  const handleChange =(e:any)=>{
    e.preventDefault()
    setSearch(e.target.value)
    setInputError('')
  }
    const fetchEventCategory = async () =>{
        try{
        const response = await axios.get(`https://www.eventbriteapi.com/v3/events/event_id/attendees/attendee_id&API_TOKEN=${import.meta.env.REACT_APP_API_TOKEN}`)
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
    
      const handleSubmit = (e:any) =>{
        if(!search){
          setInputError('Please submit a value')

        }
      }
  return (
    <div>
     <form onSubmit ={handleSubmit}>
     <CustomInput value={search} onChange={handleChange} type='text'/>
     </form>
    </div>
  )
}

export default Categories