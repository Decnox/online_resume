import { obj } from "../../utils/experiences.js"
import AppExperienceCard from "../../components/appExperienceCard.jsx"
import "./appExperience.css"

const AppExperiences = () => {
    return (
        <div id="experiences">
            <h1 id="title">
                Experiences
            </h1>
            <div className="experiences">
            {
                obj.map((experience) => <AppExperienceCard {...experience} />)
            }
            </div>
        </div>
    )
}

export default AppExperiences;