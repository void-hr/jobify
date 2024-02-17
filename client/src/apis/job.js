import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getAllJobs = async(title,filterSkill ) => {
try {
    const url = `${import.meta.env.VITE_BASE_URL}/job/all?${title ? 'title='+title : ''}${filterSkill.length > 0 ? '&skills='+filterSkill : ''}`;
    const token = localStorage.getItem('token')

    if(token) {
        const header = { headers : {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": token
        }}
        const response = await axios.get(url,header);
        return response


    }else {
        const response = await axios.get(url);
        return response
    }
   
} catch (error) {
    console.log("login: ", error.response)
   
}
}


export const getJobById = async(id) => {
    try {
        const url = `${import.meta.env.VITE_BASE_URL}/job/job-description/${id}`;
        const token = localStorage.getItem('token')
        if(token ) {
            const header = { headers : {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": token
            }}
            const response = await axios.get(url,header);
            return response
        }

            const response = await axios.get(url);
            return response
    
    } catch (error) {
        console.log("login: ", error.response.data)
       
    }
    }

    export const editJob = async(formData) => {
        console.log(JSON.stringify({"thelo":formData}, null,2))
        try {
            const token = localStorage.getItem('token')
            const url = `${import.meta.env.VITE_BASE_URL}/edit/${formData?._id}`;
           
            if(token ) {
                const headers = {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": token
                }
                const response = await axios.put(url,formData, {headers});
                return response.data
            }
           
            
        
        } catch (error) {
            console.log("Something went wrong", error.message)
           
        }
        }
    
    
