import React, {useState} from 'react';
import './AddPost.css';
import axiosOrders from "../../axiosOrders";

const AddPost = props => {
    const [post, setPost] = useState({
        title: '',
        description: '',
        date: '',
    });

    const postChanged = event => {
        const name = event.target.name;
        const value = event.target.value;
        const date = new Date();
        setPost(prevState => ({
            ...prevState,
            [name]: value,
            date: date
        }));
    };

    const makePost = async () => {
        const postCopy = {...post};
        try {
            if (postCopy.title !== '' && postCopy.description !== '') {
                await axiosOrders.post('/posts.json', postCopy);
                props.history.push({
                    pathname: '/posts'
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
            <h2>Add new post</h2>
            <p>Title</p>
            <input type="text" name="title" onChange={postChanged}/>
            <p>Description</p>
            <textarea name="description" onChange={postChanged}/>
            <br/>
            <button type="button" onClick={makePost}>Save</button>
        </div>
    );
};

export default AddPost;