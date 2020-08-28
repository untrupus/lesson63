import React, {useEffect, useState} from 'react';
import './SinglePost.css';
import axiosOrders from "../../axiosOrders";
import Spinner from "../../components/Spinner/Spinner";

const SinglePost = props => {
    const [single, setSingle] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/posts/' + props.match.params.id + '.json');
            const newPost = response.data;
            setSingle(newPost);
            setLoading(false)
        }
        fetchData().catch(console.error);
    }, [props.match.params.id]);

    const removePost = async () => {
        try {
            await axiosOrders.delete('/posts/' + props.match.params.id + '.json');
        } finally {
            props.history.push({
                pathname: '/posts'
            });
        }
    };

    const editHandler = () => {
        props.history.push({
            pathname: '/posts/' + props.match.params.id + '/edit'
        });
    };

    let singlePost = (
        <div className="container singlePost">
            <p>Created at: {single.date}</p>
            <h3>{single.title}</h3>
            <p>{single.description}</p>
            <button
                type="button"
                className="btn"
                onClick={removePost}>
                Remove
            </button>
            <button type="button" className="btn" onClick={editHandler}>Edit</button>
        </div>
    );

    if (loading) {
        singlePost = <Spinner/>
    }

    return (
        <>
            {singlePost}
        </>
    );
};

export default SinglePost;