import { useState } from 'react';
import styles from './createjobform.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { editJob } from '../../apis/job';
const CreateJobForm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [formData, setFormData] = useState({
        _id: state?.formData?._id,
        companyName: state?.formData?.companyName,
        jobPosition: state?.formData?.jobPosition,
        monthlySalary: state?.formData?.monthlySalary,
        jobType: state?.formData?.jobType,
        mode: state?.formData?.mode,
        location: state?.formData?.location,
        jobDescription: state?.formData?.jobDescription,
        aboutCompany: state?.formData?.aboutCompany,
        skills: [...state?.formData?.skills],
        information: state?.formData?.information,
        logoUrl: state?.formData?.logoUrl,
        duration: state?.formData?.duration,
       });
    
    const handleFormData = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }


    const handleJobData = async() => {
        try {
            const response = await editJob({...formData})
            return response
        } catch (error) {
            console.error("Something went wrong")
        }
    }

    return (
        <div className={styles.create}>
            <form className={styles.create_form_container}>
                <div className={styles.create_form}>

                    <h1>Add job description</h1>
                    <span>
                        <label>  Company Name  </label>
                        <input type="text" placeholder='Enter your company name here.' name="companyName" value={formData?.companyName} onChange={(e)=> handleFormData(e)} />
                    </span>
                    <span>
                        <label>  Add logo</label>
                        <input type="text" placeholder='Enter the link' name='logoUrl' value={formData?.logoUrl} onChange={(e)=> handleFormData(e)}/>
                    </span>
                    <span>
                        <label>  Job position  </label>
                        <input type="text"  placeholder='Enter job position' name='jobPosition' value={formData?.jobPosition} onChange={(e)=> handleFormData(e)}/>
                    </span>
                    <span>
                        <label>  Monthly salary</label>
                        <input type="text" placeholder='Enter Amount in rupees' name='monthlySalary' value={formData?.monthlySalary} onChange={(e)=> handleFormData(e)}/>
                    </span>
                    <span>
                        <label>  Job Type  </label>
                        <select name="jobType" value={formData?.jobType} onChange={(e)=> handleFormData(e)}>
                            <option value="fulltime">Full Time</option>
                            <option value="parttime">Part Time</option>

                        </select>
                    </span>
                    <span>
                        <label>  Remote/office  </label>
                        <select name="mode" value={formData?.mode} onChange={(e)=> handleFormData(e)}>
                        <option value="remote">Remote</option>
                            <option value="office">Office</option>
                        </select>
                    </span>
                    <span>
                        <label>Duration</label>
                        <input type="text" placeholder='Enter job duration for example 3 Months' value={formData?.duration} onChange={(e)=> handleFormData(e)}/>

                    </span>
                    <span>
                        <label>   Location</label>
                        <input type="text"  placeholder='Enter Location' name='location' value={formData?.location} onChange={(e)=> handleFormData(e)}/>
                    </span>
                    <span>
                        <label>  Job Description </label>
                        <textarea name='jobDescription' placeholder='Type the job description....' value={formData?.jobDescription} onChange={(e)=> handleFormData(e)}></textarea>
                    </span>
                    <span>
                        <label>  About Company</label>
                        <textarea name="aboutCompany" placeholder='Type about your company...'  value={formData?.aboutCompany} onChange={(e)=> handleFormData(e)}></textarea>
                    </span>
                    <span>
                        <label> Skills Required  </label>
                        <input type="text"  name='skills' placeholder='Enter the must have skills' value={formData?.skills} onChange={(e)=> handleFormData(e)}/>
                    </span>
                    <span>
                        <label>   Information</label>
                        <input type="text" name='information' placeholder='Enter the additional information' value={formData?.information} onChange={(e)=> handleFormData(e)}/>
                    </span>

                    <div className={styles.button}>
                        <button type='button' onClick={()=> navigate('/')}>Cancel</button>
                        <button type='button' onClick={handleJobData}>{state?.formData ? "Update Job" : "+ Add Job"}</button>

                    </div>
                </div>
            </form>
            <div className={styles.image_wall}>
            <h1 style={{color: 'white'}}>  Recruiter add job details here </h1>
            </div>
        </div>
    )
}

export default CreateJobForm