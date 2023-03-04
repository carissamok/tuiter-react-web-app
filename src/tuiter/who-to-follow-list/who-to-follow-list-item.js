import React from "react";
import '../index.css'

const WhoToFollowListItem = ({who}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div
          className="col-2 align-middle"
          style={{"padding-left": "8px", "padding-right": "0px"}}
        >
          <img
            className="rounded-circle follow-propic"
            src={`/tuiter/images/${who.avatarIcon}`}
            alt=''
          />
        </div>
        <div className="col-lg-7" style={{"padding": "0px"}}>
          <div className="fw-bold">{who.userName}
          <i class="bi bi-check-circle-fill" style={{"padding-left": "5px"}}></i>
          </div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-lg-3" style={{"padding": "0px"}}>
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
