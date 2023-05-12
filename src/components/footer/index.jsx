import './style.css'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
                <div className="footer-logo">
                    <img src="./images/Smart-logo.jpg" alt="" />
                </div>
                <div className="footer-contact">
                    <div className="contact-tel">
                        <li>
                            <a href="+996708877708">+996 708 877 708</a>
                        </li>
                        <li>
                            <a href="+996550188711">+996 550 188 711</a>
                        </li>                        
                    </div>                    
                    <div className="address">Kyrgyzstan, Bishkek</div>
                </div>
            </div>
        </footer>
    )
}