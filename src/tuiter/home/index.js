import React from "react";
// import posts from "./posts.json";
// import PostItem from "./post-item";
import TuitsList from "../tuits/tuits-list";

const HomeComponent = () => {
    return(
        <>
            <h1>Home</h1>
            <TuitsList/>
        </>
        // <ul className="list-group">
        //     {posts.map(post => <PostItem post={post}/> )}
        // </ul>
    );
};
export default HomeComponent;