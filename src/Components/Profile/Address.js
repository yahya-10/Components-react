import React from 'react';
import { FaGithub , FaEnvelope , FaFacebook , FaInstagram } from 'react-icons/fa';


function Address() {
    return (
        <div className="address">
            <h5>4,street Ahmed Bouleymen
                <br />
                Elkabaria 2053
                <br />
                Tunis Tunisia
            </h5>
            <div>
            <ul>
                <li><FaGithub /></li>
                <li><FaFacebook /></li>
                <li><FaEnvelope /></li>
                <li><FaInstagram /></li>
            </ul>
        </div>
            
        </div>
    )
}

export default Address
