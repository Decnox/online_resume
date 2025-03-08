import "./AppPresentation.css"
import { formations } from "../../utils/formations.js"
import AppFormationCard from "../../components/formations/appFormationCard.jsx"

const AppPresentation = () => {
    return(
        <div id="presentation">
            <div id="aboutMyself">
                <h1 id = "title">
                    Qui suis-je ?
                </h1>

                <p>
                    Bonjour, je m'appelle Loïck Caillon, j'ai 24 ans, et je suis développeur.
                    Je suis issu d'un Bac S spécialité physique que j'ai obtenu avec mention.
                    <br/>Et voici les formations que j'ai effectué :
                </p>
            </div>

            <div id="formations">
                {
                    formations.map((formation) => <AppFormationCard {...formation}/>)
                }
            </div>
        </div>
    )
}

export default AppPresentation;