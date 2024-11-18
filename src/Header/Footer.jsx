import React from 'react';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='footerdata'>
                    <div>
                        <h1>Monday - Friday, 10am - 4pm</h1>
                    </div>
                    <div>
                        <h1>Lakshmipuram, Guntur, Andhra Pradesh, India</h1>
                    </div>
                    <div>
                        <h1>+91 8891318301</h1>
                    </div>
                </div>
                <div className='footersubdata'>
                    <div>
                        <h1>Copyright &copy; 2024 by @Tarun | All Rights Reserved.</h1>
                    </div>
                    <div className='footicon'>
                        <FontAwesomeIcon icon={faLinkedin} className='ficon' />
                        <FontAwesomeIcon icon={faTwitter} className='ficon' />
                        <FontAwesomeIcon icon={faInstagram} className='ficon' />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer