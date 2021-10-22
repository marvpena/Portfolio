import React from 'react';
import '../styles/button.scss';

const TagButton = (props) => {
    return (
        <div className='tag-button'>
            <p className='tag-text'>{props.label}</p>
        </div>
    )
};

export default TagButton;
