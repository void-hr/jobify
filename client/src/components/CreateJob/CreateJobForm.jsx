import styles from './createjobform.module.css'

const CreateJobForm = () => {
    return (
        <div className={styles.create}>
            <form className={styles.create_form_container}>
                <div className={styles.create_form}>

                    <h1>Add job description</h1>


                    <span>
                        <label>  Company Name  </label>
                        <input type="text"  placeholder='Enter your company name here.'/>
                    </span>
                    <span>
                        <label>  Add logo</label>
                        <input type="text" placeholder='Enter the link' />
                    </span>
                    <span>
                        <label>  Job position  </label>
                        <input type="text"  placeholder='Enter job position'/>
                    </span>
                    <span>
                        <label>  Monthly salary</label>
                        <input type="text" placeholder='Enter Amount in rupees' />
                    </span>
                    <span>
                        <label>  Job Type  </label>
                        <select name="">
                            <option value="fulltime">Full Time</option>
                            <option value="parttime">Part Time</option>

                        </select>
                    </span>
                    <span>
                        <label>  Remote/office  </label>
                        <select name="" >
                        <option value="remote">Remote</option>
                            <option value="office">Office</option>
                        </select>
                    </span>
                    <span>
                        <label>   Location</label>
                        <input type="text"  placeholder='Enter Location'/>
                    </span>
                    <span>
                        <label>  Job Description </label>
                        <textarea name="" placeholder='Type the job description....'></textarea>
                    </span>
                    <span>
                        <label>  About Company</label>
                        <textarea name="" placeholder='Type about your company...' ></textarea>
                    </span>
                    <span>
                        <label> Skills Required  </label>
                        <input type="text"  placeholder='Enter the must have skills'/>
                    </span>
                    <span>
                        <label>   Information</label>
                        <input type="text"  placeholder='Enter the additional information'/>
                    </span>

                    <div className={styles.button}>
                        <button>Cancel</button>
                        <button>+ Add Job</button>

                    </div>
                </div>
            </form>
            <div className={styles.image_wall}>
            </div>
        </div>
    )
}

export default CreateJobForm