import "./AppFooter.css"
import image from "../../assets/linkedin.png"
function AppFooter(){
    return(
        <div id="contacts">
            <h1 id="contactsTitle">Contacts</h1>
            <div id="contact"> 
                <div id="directContact">
                    <p id="telephone">tel: +33 6 26 04 15 93</p>
                    <a href="mailto:loick.ca@gmail.com" target="mail">
                        loick.ca@gmail.com
                    </a>
                </div>
                <div id="socials">
                    <div id="linkedin">
                        <a href="https://www.linkedin.com/in/lo%C3%AFck-caillon-6a6aa919a/">
                            <img src={image} alt="logo linkedin"></img>
                        <p>Loïck Caillon</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppFooter;