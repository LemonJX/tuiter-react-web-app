const WhoToFollowListItem = (who) => {return(`
    <div class="list-group-item">
        <div class="row py-2">
            <div class="col-2 wd-logo"><img src="${who.avatarIcon}" class="rounded-circle"></div>
            <div class="col-7">
                <b>${who.userName}</b><i class="fas fa-circle-check ps-1"></i>
                <div>@${who.handle}</div>
            </div>
            <div class="col-3 mt-1">
                <button class="btn btn-primary rounded-pill float-end">Follow</button>
            </div>
        </div>
    </div>`);
}
export default WhoToFollowListItem;