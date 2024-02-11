import { useEffect, useRef, useState } from 'react'
import styles from './filtercard.module.css'
import MultiSelect from '../MultiSelect/MultiSelect';
const FilterCard = ({setTitle, setFilterSkill, filterSkill}) => {

    const [ userInput, setUserInput  ] = useState('');


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
            {filterSkill && filterSkill.map((elem,idx)=> (<Chip key={idx} setFilterSkill={setFilterSkill} skill={elem}/>))}
            </div>
            </div>
            <button className={styles.clear}>Clear</button>
        </div>
    </div>
  )
}

export default FilterCard


export const Chip = ({skill, filterSkill, setFilterSkill}) => {
const skillRef = useRef(null);

const handleClose = () => {

    const remove = skillRef.current.firstChild.innerText
    setFilterSkill(prev => prev.filter((elem) =>{ return elem != remove}))

}

    return (
        <div className={styles.chip} id='chip_container' onClick={handleClose} ref={skillRef}>
            <p>{skill}</p>
            <div className={styles.chip_x} >X</div>
        </div>
    )
} 