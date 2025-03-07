import { skills } from "../../utils/skills.js"
import AppSkillsCard from "../../components/appSkillsCard.jsx"

const AppSkills = () => {
    return(
        <div id="skills">
            <h1>Compétences</h1>
                <div className="skill">
                {   
                    skills.map((skill) => 
                        <AppSkillsCard {...skill} />)
                }
                </div>
        </div>
        
    )
}

export default AppSkills;