import React from 'react'
import JobDescription from '../../components/JobDescription/JobDescription'
import Navbar from '../../components/Navbar/Navbar'

const JobDescriptionPage = () => {  
  return (
    <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:'center'}}>
    <Navbar  />
    <JobDescription />
    </div>
    
  )
}

export default JobDescriptionPage