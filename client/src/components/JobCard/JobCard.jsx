import { useEffect, useState } from 'react'
import { getAllJobs } from '../../apis/job'
import { useNavigate  } from 'react-router-dom'
import styles from './jobcard.module.css'

 const JobCard = ({title}) => {
    // const skills = ["html", "css", "js", "react"]
    const navigate = useNavigate();
    const skills = ''
    const [allJobs, setAllJobs] = useState([]);
    const [isEditable, setIsEditable] = useState(false);



    useEffect( ()=> {
        getJobs();
    }, [title])
    const getJobs = async () => {
        const jobs = await getAllJobs(title, skills);
        setAllJobs(jobs.data.data);
    }
    

    return (
        <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>

      { allJobs && allJobs?.map((elem, idx) => ( <div key={elem._id} className={styles.card_container}>
            <div className={styles.red}></div>

            <div className={styles.job_card}>
                <div className={styles.job_card_left} >
                    <img src={elem?.logoUrl} alt="company logo" />
                    <div className={styles.job_card_desc}>
                        <h3 className={styles.title}>
                            {elem.jobPosition}
                        </h3>
                        <div className={styles.job_info}>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M14.6661 9.27119C15.9361 10.1333 16.826 11.3013 16.826 12.8586V15.6395H20.5339V12.8586C20.5339 10.8378 17.2246 9.64198 14.6661 9.27119Z" fill="#919191"/>
  <path d="M7.55626 8.22374C9.60408 8.22374 11.2642 6.56365 11.2642 4.51583C11.2642 2.46802 9.60408 0.80793 7.55626 0.80793C5.50844 0.80793 3.84836 2.46802 3.84836 4.51583C3.84836 6.56365 5.50844 8.22374 7.55626 8.22374Z" fill="#919191"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M13.118 8.22379C15.1667 8.22379 16.826 6.56451 16.826 4.51589C16.826 2.46727 15.1667 0.807983 13.118 0.807983C12.6824 0.807983 12.2745 0.900681 11.8852 1.03046C12.6829 2.01696 13.118 3.24723 13.118 4.51589C13.118 5.78454 12.6829 7.01481 11.8852 8.00132C12.2745 8.1311 12.6824 8.22379 13.118 8.22379ZM7.55619 9.15077C5.08116 9.15077 0.140381 10.3929 0.140381 12.8587V15.6396H14.972V12.8587C14.972 10.3929 10.0312 9.15077 7.55619 9.15077Z" fill="#919191"/>
</svg>
                            11-50</p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
<path d="M7.20035 4.1039C6.73892 3.1316 5.75015 2.45594 4.59658 2.45594H0.888672V0.807983H10.7764V2.45594H8.09025C8.48576 2.93385 8.78239 3.49415 8.95543 4.1039H10.7764V5.75186H9.11198C8.90599 8.059 6.9614 9.87175 4.59658 9.87175H3.99507L9.54045 15.6396H7.25803L1.71265 9.87175V8.22379H4.59658C6.04678 8.22379 7.24979 7.15262 7.44754 5.75186H0.888672V4.1039H7.20035Z" fill="#9C9C9C"/>
</svg>
                                
{elem.monthlySalary}</p>
                            <p>{elem.location}</p>
                        </div>
                        <div className={styles.job_misc}>
                            <p>{elem.mode}</p>
                            <p>{elem.jobType}</p>

                        </div>
                    </div>
                </div>

                    <div className={styles.job_card_right}>
                        <div style={{display:"flex", justifyContent:'flex-end', gap:"1rem",  width:'100%', overflowX:"scroll"}}>
                      { elem.skills.map((elem,idx )=> ( <Tag key={idx}title={elem}/>) )}
                      </div>
                      <div className={styles.button_container}>
                     { elem.isEditable ?  <button onClick={()=> navigate('/create', {state : {
                            id: elem._id,
                            creatorId: elem?.refUserId,
                            
                        }})}> Edit Details</button> : " "}
                        <button onClick={()=> navigate('/description', {state : {
                            id: elem._id,
                            creatorId: elem?.refUserId,
                            
                        }})}>View Details</button>
                        </div>
                    </div>
            </div>
        </div>) )}
        </div>
    )
}


export default JobCard

export const Tag = ({title, rounded}) => {

    return (
        <>{
        rounded ? 
        <div className={styles.tag} style={{borderRadius:'1rem'}}>{title}</div> :
       <div className={styles.tag}>{title}</div>} 
       </>
       
    )
}