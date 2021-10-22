import React from 'react';
import '../styles/layout.scss';

const Footer = (props) => {
    return (
        <div className='footer'> 
            <div>
                {props.email}
            </div>
            <div>
              <a href='instagram.com'>Instagram</a>
              <a href='linkedin.com'>LinkedIn</a>
              <a href='github.com'>GitHub</a>
            </div>
        </div>
    )
}

export default Footer;