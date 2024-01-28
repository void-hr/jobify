import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getAllJobs = async(title,skills ) => {
try {
    const url = `${import.meta.env.VITE_BASE_URL}/job/all?${title ? 'title='+title : ''}${skills ? '&skills='+skills : ''}`;
   
    const response = await axios.get(url);
   
    
    return response.data

} catch (error) {
    console.log("login: ", error.response.data)
   
}
}