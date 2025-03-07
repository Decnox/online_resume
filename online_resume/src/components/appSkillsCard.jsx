import "./appSkillsCard.css"
const AppSkillsCard = ({name, color}) => {
    return (
        <div className="skill" style={{backgroundColor: color}}>
            <h1>{name}</h1>
        </div>
    )
}

export default AppSkillsCard;