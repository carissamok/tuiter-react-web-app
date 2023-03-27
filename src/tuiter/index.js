import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index";
import ExploreComponent from "./explore/index";
import HomeComponent from "./home";
import whoReducer from "./reducers/who-reducers";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({ reducer: { who: whoReducer, tuits: tuitsReducer} });

function Tuiter({ active="home" }) {
  return (
    <Provider store={store}>
      <div>
        <div className="row mt-2" style={{ padding: "10px" }}>
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active={active} />
          </div>
          <div
            className={`col-10 col-md-10 col-lg-7 col-xl-6 ${active === 'home' ? '' : 'd-none'}`}
            style={{ position: "relative" }}

          >
            <HomeComponent/>
          </div>
          <div
            className={`col-10 col-md-10 col-lg-7 col-xl-6 ${active === 'explore' ? '' : 'd-none'}`}
            style={{ position: "relative" }}

          >
            <ExploreComponent/>
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
