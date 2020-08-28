import React, {useState, useEffect} from 'react';
import './Posts.css';
import axiosOrders from "../../axiosOrders";
import PostAtHome from "../PostAtHome/PostAtHome";

const Posts = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/posts.json');
            const newPosts = response.data;
            if (newPosts !== null) {
                setPosts(newPosts);
            }
        }
        fetchData().catch(console.error);
    }, []);

    let postFeed;
    if (Object.keys(posts).length === 0) {
        postFeed = (
            <h1>Add your first post...</h1>
        );
    } else {
        const responseData = Object.entries(posts);
        postFeed = responseData.map(post => {
            return (
                <PostAtHome
                    key={post[0]}
                    title={post[1].title}
                    id={post[0]}
                    date={post[1].date}
                />
            )
        });
    }

    return (
        <div className="container">
            {postFeed}
        </div>
    );
};

export default Posts;