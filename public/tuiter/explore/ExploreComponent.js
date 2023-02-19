import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="row mb-2">
    <div class="col-11">
      <i class="fas fa-magnifying-glass search-icon"></i>
      <input
        type="text"
        class="form-control round search-bar-indent"
        placeholder="Search Tuiter"
      />
    </div>
    <div class="col-1 align-middle">
      <i class="fas fa-gear fa-2x"></i>
    </div>
  </div>
  <div class="row mb-2">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
      </li>
      <li class="nav-item d-none d-md-block">
        <a class="nav-link" href="entertainment.html" tabindex="-1"
          >Entertainment</a
        >
      </li>
    </ul>
  </div>
  <div class="row card">
    <img
      src="../images/starship.webp"
      class="img-fluid"
      style="padding: 0px"
    />
    <div class="card-img-overlay">
      <h3 class="card-title text-img-overlay">SpaceX's Starship</h3>
    </div>
  </div>
    `);
}

export default ExploreComponent;
