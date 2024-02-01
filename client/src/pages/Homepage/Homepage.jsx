import { useEffect, useState } from "react"
import FilterCard from "../../components/Filter/FilterCard"
import JobCard from "../../components/JobCard/JobCard"
import Navbar from "../../components/Navbar/Navbar"

const Homepage = ({user}) => {
  const [ title, setTitle] = useState('');

  
  
  return (
    <div style={{display:"flex", flexDirection:'column', alignItems: 'center', gap:'4vh'}}>
        {/* list of component */}
        {/* 1. Navbar */}
     <Navbar  />
     <FilterCard setTitle={setTitle} title={title}/> 
        {/* 2. Search / filter Card */}

        {/* 3. Job Card */}
        <JobCard title={title} setTitle={setTitle}  />
    </div>
  )
}

export default Homepage