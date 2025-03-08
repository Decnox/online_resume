import "./AppHeader.css"
import image from "../../assets/photo profil Loick.png"
function AppHeader(){
    return(
        <div id="header">
            <div id="name">
                <img src={image} 
                alt="Loick PP" id="profilImage" ></img>
                <h2>Loïck Caillon</h2>
                <h3>Développeur</h3>
            </div>
            <ul id="header_links">
                <li className="link"><a href ="#presentation">Home</a></li>
                <li className="link"><a href ="#skills">Compétences</a></li>
                <li className="link"><a href ="#experiences">Expériences</a></li>
                <li className="link"><a href ="#contacts">Contacts</a></li>
            </ul>
        </div>
    );
}

export default AppHeader;