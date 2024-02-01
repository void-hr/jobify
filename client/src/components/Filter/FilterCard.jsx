import { useEffect, useState } from 'react'
import styles from './filtercard.module.css'
import MultiSelect from '../MultiSelect/MultiSelect';
const FilterCard = ({setTitle}) => {

    const [ userInput, setUserInput  ] = useState('');
      const [ filterSkill, setFilterSkill ] = useState([]);


    const handleTitle = (e) => {
        setUserInput(e.target.value)
        if(e.key === 'Enter'){
            setTitle(userInput)
        }
    }



  return (
    <div className={styles.card_container}>
        <input type="text" name='title' onKeyDown={handleTitle}/>
        <div className={styles.filter_keywords}>
            <div className={styles.left_filter}>
             <MultiSelect  filterSkill={filterSkill} setFilterSkill={setFilterSkill}/>
           
           <div className={styles.chip_container}>
            {filterSkill && filterSkill.map((elem,idx)=> (<Chip key={idx} filterSkill={filterSkill} setFilterSkill={setFilterSkill} skill={elem}/>))}
            </div>
            </div>
            <button className={styles.clear}>Clear</button>
        </div>
    </div>
  )
}

export default FilterCard


export const Chip = ({skill, filterSkill, setFilterSkill}) => {


    return (
        <div className={styles.chip} id='chip_container' onClick={handleClose}>
            <p>{skill}</p>
            <div className={styles.chip_x} >X</div>
        </div>
    )
} 