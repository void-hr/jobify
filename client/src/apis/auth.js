import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// process.meta.env.BASE_URL

export const login = async(formData) => {
    const {email,password } = formData
try {
    const url = `${import.meta.env.VITE_BASE_URL}/login`;
    const reqPayload = {email,password};
   
    const {data, statusText} = await axios.post(url, reqPayload);
   
     toast.success(` ${data?.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return {data, statusText}

} catch (error) {
    console.log("login: ", error.response.data)
    toast.error(` ${error.response.data.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

}
}