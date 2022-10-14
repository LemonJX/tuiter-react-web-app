const NavigationSidebar = () => {return(`
    <div class="list-group">
        <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
        <a class="list-group-item" href="/">
            <i class="fas fa-house float-start me-2 pt-1"></i>
            <span class="d-none d-xl-block">Home</span></a>
        <a class="list-group-item active">
            <i class="fas fa-hashtag float-start me-2 pt-1"></i>
            <span class="d-none d-xl-block">Explore</span></a>
        <a class="list-group-item" href="/">
            <i class="fas fa-bell float-start me-2 pt-1"></i>
            <span class="d-none d-xl-block">Notifications</span></a>
        <a class="list-group-item" href="/">
            <i class="fas fa-envelope float-start me-2 pt-1"></i>
            <span class="d-none d-xl-block">Messages</span></a>
        <a class="list-group-item" href="/">
            <i class="fas fa-bookmark float-start me-2 pt-1"></i>
            <span class="d-none d-xl-block">Bookmarks</span></a>
        <a class="list-group-item" href="/">
            <i class="fas fa-list-ul float-start me-2 pt-1"></i>
            <span class="d-none d-xl-block">List</span></a>
        <a class="list-group-item" href="/">
            <i class="fas fa-user float-start me-2 pt-1"></i>
            <span class="d-none d-xl-block">Profile</span></a>
        <a class="list-group-item" href="/">
            <i class="fas fa-ellipsis float-start me-2 pt-1"></i>
            <span class="d-none d-xl-block">More</span></a>
    </div>
    <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
    </div>
    `);
}
export default NavigationSidebar;