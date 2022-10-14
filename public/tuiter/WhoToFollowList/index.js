import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {return(`
    <ul class="list-group">
        <div class="list-group-item"><b>Who to follow</b></div>
        ${who.map(who => {return(WhoToFollowListItem(who));}).join('')}
    </ul>
    `);
}
export default WhoToFollowList;