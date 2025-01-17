import "./AppFooter.css"
function AppFooter(){
    return(
        <div id="footer">
            <h1 id="contactsTitle">Contacts</h1>
            <div id="contacts"> 
                <div id="contact">
                    <p>tel: +33 6 26 04 15 93</p>
                    <a href="mailto:loick.ca@gmail.com" target="mail">
                        loick.ca@gmail.com
                    </a>
                </div>
                <div id="socials">
                    <div id="linkedin">
                        <a href="https://www.linkedin.com/in/lo%C3%AFck-caillon-6a6aa919a/">
                        <img src="path to linkedin logo" alt="logo linkedin"></img>
                        <p>Loïck Caillon</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppFooter;