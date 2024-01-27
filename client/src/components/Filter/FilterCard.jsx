import styles from './filtercard.module.css'
const FilterCard = () => {
    const skills = ['html', 'css', 'react', 'js']
  return (
    <div className={styles.card_container}>
        <input type="text" />
        <div className={styles.filter_keywords}>
            <div className={styles.left_filter}>
            <select defaultValue={"skills"}>
                <option value="skills">Skills</option>
                <option value="title">Title</option>

            </select>
            {skills.map((elem,idx)=> (<Chip key={idx} skill={elem}/>))}
            </div>
            <button className={styles.clear}>Clear</button>
        </div>
    </div>
  )
}

export default FilterCard


export const Chip = ({skill}) => {
    return (
        <div className={styles.chip}>
            <p>{skill}</p>
            <div className={styles.chip_x}>X</div>
        </div>
    )
} 