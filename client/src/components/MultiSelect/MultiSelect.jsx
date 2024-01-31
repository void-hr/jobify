import { useState } from 'react'
import styles from './multiselect.module.css'
import { Chip } from '../Filter/FilterCard';

const MultiSelect = ({filterSkill, setFilterSkill}) => {
  const skills =  [ 'html','css','javascript','mongodb','nodejs','bun','graphql','typescript','restapi'  ]
  const handleSkill = (e) => {
    if(filterSkill.includes(e.target.value)) return;
    setFilterSkill(prev => [...prev, e.target.value]);

  }

  console.log(filterSkill)
  return (
    <div>
      <select name="select" className={styles.select} onChange={handleSkill}>
      <option  disabled defaultChecked hidden>Skills</option>
       { skills.map((elem, idx) => 
        (<option key={idx} value={elem}>{elem}</option>)
       )}
  
       </select>
    </div>
  )
}

export default MultiSelect