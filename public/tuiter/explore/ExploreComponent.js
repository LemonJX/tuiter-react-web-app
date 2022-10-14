import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {return(`
    <div class="row align-items-center mb-2">
        <div class="col-10">
            <i class="fas fa-magnifying-glass position-absolute p-1 m-2"></i>
            <input class="form-control rounded-pill p-2" type="text" placeholder="Search Tuiter">
        </div>
        <div class="col-2">
            <a href="explore-setting.html"><i class="fas fa-gear fa-2x float-end"></i></a>
        </div>
    </div>
    <ul class="nav nav-tabs mb-2 navbar-expand">
        <li class="nav-item"><a href="#" class="nav-link active">For You</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Trending</a></li>
        <li class="nav-item"><a href="#" class="nav-link">News</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Sports</a></li>
        <li class="nav-item d-sm-none d-md-block"><a href="#" class="nav-link">Entertainment</a></li>
    </ul>
    <div class="position-relative">
        <img src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
             class="w-100" alt="SpaceX Starship">
        <h1 class="position-absolute bottom-0 m-2">SpaceX's Starship</h1>
    </div>
    ${PostSummaryList()}
    `);
}
export default ExploreComponent;
