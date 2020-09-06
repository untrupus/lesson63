import React from 'react';
import './PostAtHome.css';

const PostAtHome = props => {
    return (
        <div className="homePost">
            <p>Created at: {props.date}</p>
            <h3>{props.title}</h3>
        </div>
    );
};

export default PostAtHome;