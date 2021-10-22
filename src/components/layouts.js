import React from 'react';
import '../styles/layout.scss';

const Layout = ({children}) => {
    return (
        <div className='wrapper'>
            {children}
        </div>
    )
};


export default Layout;