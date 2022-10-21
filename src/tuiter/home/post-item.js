import React from "react";
const ImgArea = (
    {
        image = "starship.jpeg",
        title = "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        text = "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space..."
    }
) => {
    if (title == null && text == null) {
        return(<img src={`./image/${image}`} className="w-100 rounded border" alt={"image"}/>);
    }
    return(
        <>
            <img src={`./image/${image}`} className="w-100 rounded-top border" alt={"image"}/>
            <div className="p-2 rounded-bottom border border-top-0">{title}<br/>
                <span className="text-secondary">{text}</span>
            </div>
        </>
    );
};

const PostItem = (
    {
        post = {
        "avatar": "avatar.jpg",
        "name": "Elon Musk",
        "handle": "elonmusk",
        "time": "23h",
        "text": "Amazing show about @Inspiration4x mission!",
        "image": "starship.jpeg",
        "comments": "4.2K",
        "retuit": "3.5K",
        "likes": "37.5K"
        }
    }
) => {
    return(
    <div className="list-group-item">
        <div className="row">
            <div className="col-2">
                <img src={`./image/${post.avatar}`} className="rounded-circle mt-3 w-100" alt={"avatar"}/>
            </div>
            <div className="col-10 p-2">
                <div className="row">
                    <div className="col-11">
                        <b>{post.name}</b><i className="bi bi-patch-check-fill text-primary ps-1"></i>
                        <span className="text-secondary"> @{post.handle} - {post.time}</span>
                    </div>
                    <div className="col-1"><i className="bi bi-three-dots me-2 pt-1 text-secondary"></i></div>
                </div>
                <div>{post.text}</div>
                
                <div className="pt-2 pb-2">
                    <ImgArea image={post.image} title={post.img_title} text={post.img_text}/>
                </div>
                
                <div className="row">
                    <div className="col-3">
                        <i className="bi bi-chat text-secondary"></i>
                        <span className="text-secondary"> {post.comments}</span>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-repeat text-secondary"></i>
                        <span className="text-secondary"> {post.retuit}</span>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-heart text-secondary"></i>
                        <span className="text-secondary"> {post.likes}</span>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-upload text-secondary"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};
export default PostItem;