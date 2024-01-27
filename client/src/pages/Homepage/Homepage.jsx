import FilterCard from "../../components/Filter/FilterCard"
import JobCard from "../../components/JobCard/JobCard"
import Navbar from "../../components/Navbar/Navbar"

const Homepage = () => {
  return (
    <div style={{display:"flex", flexDirection:'column', alignItems: 'center', gap:'4vh'}}>
        {/* list of component */}
        {/* 1. Navbar */}
     <Navbar />
     <FilterCard /> 
        {/* 2. Search / filter Card */}

        {/* 3. Job Card */}
        <JobCard />
    </div>
  )
}

export default Homepage