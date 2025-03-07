import "./appFormationCard.css"

const AppFormationCard = ({
    formation,
    start,
    end,
    description
}) => {
    return (
        <div id="formation">
            <h1>{formation}</h1>
            <p>Start: {start}</p>
            <p>End: {end}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default AppFormationCard;