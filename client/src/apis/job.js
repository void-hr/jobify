import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getAllJobs = async(title,skills ) => {
try {
    const url = `${import.meta.env.VITE_BASE_URL}/job/all?${title ? 'title='+title : ''}${skills ? '&skills='+skills : ''}`;
    const token = localStorage.getItem('token')

    if(token) {
        const header = { headers : {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": token
        }}
        const response = await axios.get(url,header);
        return response
    }
   
} catch (error) {
    console.log("login: ", error.response.data)
   
}
}


export const getJobById = async(id) => {
    try {
        const url = `${import.meta.env.VITE_BASE_URL}/job/job-description/${id}`;
        const token = localStorage.getItem('token')
        if(token) {
            const header = { headers : {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": token
            }}
            const response = await axios.get(url,header);
            return response
        }
       
    
    } catch (error) {
        console.log("login: ", error.response.data)
       
    }
    }

    export const editJob = async(id, formData) => {
        try {
            const url = `${import.meta.env.VITE_BASE_URL}/edit/${id}`;
           
            const response = await axios.put(url,formData);
           
            
            return response.data
        
        } catch (error) {
            console.log("login: ", error.response.data)
           
        }
        }
    
    
