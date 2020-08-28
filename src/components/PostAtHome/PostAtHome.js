import React from 'react';
import './PostAtHome.css';
import {NavLink} from 'react-router-dom';

const PostAtHome = props => {
    return (
        <div className="homePost">
            <p>Created at: {props.date}</p>
            <h3>{props.title}</h3>
            <button type="button">
                <NavLink to={"/posts/" + props.id}
                >Read more >></NavLink>
                </button>
        </div>
    );
};

export default PostAtHome;