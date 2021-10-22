import React from 'react';
import '../styles/layout.scss';

const CardBox = ({ children }) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
};

const CardSquare = ({ children }) => {
    return (
        <div className='card-square'>
            {children}
        </div>
    )
}

const CardRectangle = ({ children }) => {

    return (
        <div className='card-rectangle'>
            {children}
        </div>
    )
}
export {
    CardSquare,
    CardRectangle
}
export default CardBox;