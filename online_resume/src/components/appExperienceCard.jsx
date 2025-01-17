const AppExperienceCard = ({
    start,
    end,
    company,
    desc
}) => {
    return (
        <div className="experienceCard">
            <div className="date">
            <h3>Company: {company}</h3>
                <p>Start: {start}</p>
                <p>End: {end}</p>
            </div>
            <p>Description: <br/>{desc}</p>
        </div>
    )
}

export default AppExperienceCard;