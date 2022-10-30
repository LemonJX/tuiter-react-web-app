import React from "react";
const PostSummaryItem = (
    {post = {
        "_id": 1,
        "topic": "Space",
        "avatar": "avatar.jpg",
        "userName": "SpaceX",
        "handle": "spacex",
        "time": "2h",
        "abstract": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about.",
        "content": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars.",
        "liked": true,
        "comments": "4.2K",
        "retuit": "3.5K",
        "likes": "37.5K"}
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.abstract}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`./image/${post.avatar}`} alt={"post img"}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;