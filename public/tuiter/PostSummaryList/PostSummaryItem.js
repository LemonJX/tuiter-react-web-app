const PostSummaryItem = (post) => {return(`
    <div class="list-group-item">
        <div class="row py-2">  <!--    border border-top-0 m-0-->
            <div class="col-10 p-2">
                <div class="text-secondary">${post.topic}</div>
                <b>${post.userName}</b><i class="fas fa-circle-check small ps-1"></i>
                    <span class="text-secondary"> - ${post.time}</span>
                <p class="m-0"><b>${post.title}</b></p>
            </div>
            <div class="col-2 wd-post pb-2">
                <img src="${post.image}" class="float-end rounded mt-3">
            </div>
        </div>
    </div>`);
}
export default PostSummaryItem;