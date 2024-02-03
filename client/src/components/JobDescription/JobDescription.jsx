import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { getJobById } from "../../apis/job";
import styles from './jobdescription.module.css'
import { Tag } from "../JobCard/JobCard";
import { useNavigate } from "react-router-dom";
const JobDescription = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [ jobDesc, setJobDesc ] = useState();
    const [ isEditable, setIsEditable] = useState(false);
     
    useEffect( () => {
        if(!state) return;
    const getJob = async () => {
        
        try {
            if(state){
                const {  data : response } = await getJobById(state.id);
                if(response?.isEditable) setIsEditable(response?.isEditable);

                setJobDesc(response.data);
            }
        } catch (error) {
         console.log("something went wrong")   
        }
       
    }

    getJob();
      
    }, [state, isEditable])

   
    const handleEditJob = (e) => {
        e.preventDefault();
        navigate('/create', {state: {
            formData: jobDesc,
            id: jobDesc?._id
        }})
    }
  return (

    <>
    {!jobDesc ?  <div>Loading</div> :
    
    <div className={styles.description_container}>
    <div className={styles.title_card}>
       <h1> {jobDesc?.jobPosition +" "+jobDesc?.mode +" / "+ jobDesc?.jobType + " at " + jobDesc?.companyName}</h1>
    </div>
    <div className={styles.description_card}>

     
     <div className={styles.job_info}>
        <div className={styles.job_info_left}>
        <span> 
            <p>1w ago</p>
            <p>{jobDesc?.jobType}</p>
            <img src={jobDesc?.logoUrl} alt="" />
            <p>{jobDesc?.companyName}</p>

        </span>
        <h1>{jobDesc?.jobPosition}</h1>
        <h3>{jobDesc?.location +' | India' }</h3>
        </div>
        
      { isEditable ? <div>
            <button onClick={handleEditJob}>Edit Job</button>
        </div> : ""}
       
     </div>
     
     
     
     
        {/*  */}
        
        <div className={styles.duration_stipend}>
            <div className={styles.stipend}>
            <span >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                <path d="M18.375 8C18.375 8.86529 18.1184 9.71115 17.6377 10.4306C17.1569 11.1501 16.4737 11.7108 15.6742 12.042C14.8748 12.3731 13.9951 12.4597 13.1465 12.2909C12.2978 12.1221 11.5183 11.7054 10.9064 11.0936C10.2946 10.4817 9.87787 9.70219 9.70906 8.85352C9.54025 8.00485 9.62689 7.12519 9.95803 6.32576C10.2892 5.52633 10.8499 4.84305 11.5694 4.36232C12.2888 3.88159 13.1347 3.625 14 3.625C15.1603 3.625 16.2731 4.08594 17.0936 4.90641C17.9141 5.72688 18.375 6.83968 18.375 8ZM27.125 1V15C27.125 15.2321 27.0328 15.4546 26.8687 15.6187C26.7046 15.7828 26.4821 15.875 26.25 15.875H1.75C1.51794 15.875 1.29538 15.7828 1.13128 15.6187C0.967187 15.4546 0.875 15.2321 0.875 15V1C0.875 0.767936 0.967187 0.545376 1.13128 0.381282C1.29538 0.217187 1.51794 0.125 1.75 0.125H26.25C26.4821 0.125 26.7046 0.217187 26.8687 0.381282C27.0328 0.545376 27.125 0.767936 27.125 1ZM25.375 6.06953C24.3814 5.77576 23.4772 5.23807 22.7445 4.50545C22.0119 3.77283 21.4742 2.86856 21.1805 1.875H6.81953C6.52576 2.86856 5.98807 3.77283 5.25545 4.50545C4.52283 5.23807 3.61856 5.77576 2.625 6.06953V9.93047C3.61856 10.2242 4.52283 10.7619 5.25545 11.4945C5.98807 12.2272 6.52576 13.1314 6.81953 14.125H21.1805C21.4742 13.1314 22.0119 12.2272 22.7445 11.4945C23.4772 10.7619 24.3814 10.2242 25.375 9.93047V6.06953Z" fill="#999999"/>
                </svg>
            <p>Stipend</p>
            </span>
            <p>{`Rs ${jobDesc?.monthlySalary}/month`}</p>
            </div>
            <div className={styles.duration}>

<span>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M1.66666 15.8333C1.66666 17.25 2.74999 18.3333 4.16666 18.3333H15.8333C17.25 18.3333 18.3333 17.25 18.3333 15.8333V9.16663H1.66666V15.8333ZM15.8333 3.33329H14.1667V2.49996C14.1667 1.99996 13.8333 1.66663 13.3333 1.66663C12.8333 1.66663 12.5 1.99996 12.5 2.49996V3.33329H7.49999V2.49996C7.49999 1.99996 7.16666 1.66663 6.66666 1.66663C6.16666 1.66663 5.83332 1.99996 5.83332 2.49996V3.33329H4.16666C2.74999 3.33329 1.66666 4.41663 1.66666 5.83329V7.49996H18.3333V5.83329C18.3333 4.41663 17.25 3.33329 15.8333 3.33329Z" fill="#999999"/>
</svg>
<p>Duration</p>
</span>
<p>{`${jobDesc?.duration || '3 Months'} `}</p>
</div>
        </div>
        <div>
             <h3>About company</h3>  
             {jobDesc?.aboutCompany}
        </div>
        <div>
            <h3>About the  job/internship</h3>
            {jobDesc?.jobDescription}
        </div>
        <div className={styles.skills}>
            <h3>Skill(s) required</h3>
            <div className={styles.tag}>
            {jobDesc?.skills?.map((elem,idx)=> (<div key={idx} >
            <Tag title={elem} rounded={true}/>
            </div>))}
            </div>
        </div>
        <div>
            <h3> Additional Information</h3>
            {jobDesc?.information}
        </div>
    </div>
    </div>
      
            }
    </>
  )
}

  
    export default JobDescription