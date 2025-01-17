import { obj } from "../../utils/experiences.js"
import AppExperienceCard from "../../components/appExperienceCard.jsx"

const AppExperiences = () => {
    return (
        <div className="experiences">
            <h1>cards with each experience</h1>

            {
                obj.map((experience) => <AppExperienceCard {...experience} />)
            }
        </div>
    )
}

export default AppExperiences;