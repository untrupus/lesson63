import React, {useEffect, useState} from 'react';
import './EditPost.css';
import axiosOrders from "../../axiosOrders";

const EditPost = props => {
    const [editPost, setEditedPost] = useState({
        title: '',
        description: '',
        date: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/posts/' + props.match.params.id + '.json');
            const newPost = response.data;
            setEditedPost(newPost);
        }
        fetchData().catch(console.error);
    }, [props.match.params.id]);

    const postChanged = event => {
        const name = event.target.name;
        const value = event.target.value;
        setEditedPost(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const saveChanges = async () => {
        const postCopy = {...editPost};
        try {
            if (postCopy.title !== '' && postCopy.description !== '') {
                const url = '/posts/' + props.match.params.id + '.json';
                await axiosOrders.put(url, postCopy);
                props.history.push({
                    pathname: '/posts/' + props.match.params.id
                });
            } else {
                alert('Fill in all fields');
            }
        } finally {
            console.log('success');
        }
    };


    return (
        <div className="container">
            <h2>Edit post</h2>
            <p>Title</p>
            <input type="text" name="title" value={editPost.title} onChange={postChanged}/>
            <p>Description</p>
            <textarea name="description" value={editPost.description} onChange={postChanged}/>
            <br/>
            <button type="button" onClick={saveChanges}>Save</button>
        </div>
    );
};

export default EditPost;