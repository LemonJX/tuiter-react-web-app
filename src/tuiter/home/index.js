import React from "react";
import "./index.css";
import posts from "./posts.json";
import PostItem from "./post-item";

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {posts.map(post => <PostItem post={post}/> )}
        </ul>
    );
};
export default HomeComponent;