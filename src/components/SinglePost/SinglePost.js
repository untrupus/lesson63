import React, {useEffect, useState} from 'react';
import './SinglePost.css';
import axiosOrders from "../../axiosOrders";

const SinglePost = props => {
    const [single, setSingle] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/posts/' + props.match.params.id + '.json');
            const newPost = response.data;
            setSingle(newPost);
        }
        fetchData().catch(console.error);
    }, [props.match.params.id]);

    const removePost = async () => {
        try {
            await axiosOrders.delete('/posts/' + props.match.params.id + '.json');
        } finally {
            console.log('success')
        }
    }

    return (
        <div className="container singlePost">
            <p>Created at: {single.date}</p>
            <h3>{single.title}</h3>
            <p>{single.description}</p>
            <button
                type="button"
                className="btn"
                onClick={removePost}>
                {/*<NavLink to="/"*/}
                {/*>Remove</NavLink>*/}
                </button>
            <button type="button" className="btn">Edit</button>
        </div>
    );
};

export default SinglePost;