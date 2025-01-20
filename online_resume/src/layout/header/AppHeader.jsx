import "./AppHeader.css"
function AppHeader(){
    return(
        <div id="header">
            <div id="name">
                <img src="D/REACT/CV_en_ligne/cv_en_ligne/resume_online/resume_online/src/img/Caillon_Loick.jpg" 
                alt="Loick PP" id="profilImage" ></img>
                <h2>Loïck Caillon</h2>
                <h3>Développeur</h3>
            </div>
            <ul id="header_links">
                <li className="link"><a href ="#home">Home</a></li>
                <li className="link"><a href ="#competences">Compétences</a></li>
                <li className="link"><a href ="#experiences">Expériences</a></li>
                <li className="link"><a href ="#contacts">Contacts</a></li>
            </ul>
        </div>
    );
}

export default AppHeader;