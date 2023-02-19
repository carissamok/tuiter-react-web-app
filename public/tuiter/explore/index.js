import NavigationSidebar from "../NavigationSideBar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
   $('#wd-explore').append(`
    <div class="row mt-2">
    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
      ${NavigationSidebar()}
    </div>
    <div class="col-xl-6 col-lg-7 col-sm-10">
      ${ExploreComponent()}
      ${PostSummaryList()}
    </div>
    <div class="col-4 d-none d-lg-block">
    ${WhoToFollowList()}
    </div>
    </div> 
   `);
}
$(exploreComponent);